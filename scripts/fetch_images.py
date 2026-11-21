"""Download each trip's Wikimedia Commons photos into the site, with credits.

Reads <trip>/images.json ({key: {file, alt}}), writes <trip>/img/<key>.jpg (1280 px wide),
<trip>/img/<key>-s.jpg (600 px) and <trip>/credits.json ({key: {author, license, page}}).
Run by .github/workflows/fetch-images.yml.
"""
import io, json, re, sys, time, html, pathlib, urllib.error, urllib.parse, urllib.request
from PIL import Image

UA = "TripItinerariesSite/1.1 (https://github.com/shyam310195/Trip-itineraries; personal itinerary photo mirror) python-urllib"
API = "https://commons.wikimedia.org/w/api.php"

def get(url, tries=6):
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            wait = int(e.headers.get("Retry-After") or 0) or 10 * (attempt + 1)
            print("retry", e.code, url[:120], "in", wait, "s", file=sys.stderr); time.sleep(min(wait, 90))
        except Exception as e:
            print("retry", url[:120], e, file=sys.stderr); time.sleep(10 * (attempt + 1))
    return None

def strip(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s or ""))).strip()

def run(trip):
    root = pathlib.Path(trip)
    images = json.loads((root / "images.json").read_text())
    out = root / "img"; out.mkdir(exist_ok=True)
    credits_path = root / "credits.json"
    credits = json.loads(credits_path.read_text()) if credits_path.exists() else {}
    keys = list(images); failed = []
    for i in range(0, len(keys), 40):
        chunk = keys[i:i + 40]
        q = urllib.parse.urlencode({"action": "query", "format": "json", "prop": "imageinfo",
            "iiprop": "url|extmetadata", "iiurlwidth": 1280, "iiextmetadatafilter": "Artist|LicenseShortName",
            "titles": "|".join("File:" + images[k]["file"] for k in chunk)})
        data = json.loads(get(API + "?" + q))
        norm = {n["to"]: n["from"] for n in data["query"].get("normalized", [])}
        by_title = {("File:" + images[k]["file"]).replace("_", " "): k for k in chunk}
        for p in data["query"]["pages"].values():
            k = by_title.get(norm.get(p["title"], p["title"]).replace("_", " "))
            if not k or "imageinfo" not in p:
                print("missing", p.get("title"), file=sys.stderr); continue
            ii = p["imageinfo"][0]; md = ii.get("extmetadata", {})
            credits[k] = {"author": strip(md.get("Artist", {}).get("value")) or "Unknown",
                          "license": strip(md.get("LicenseShortName", {}).get("value")),
                          "page": ii.get("descriptionurl")}
            big, small = out / f"{k}.jpg", out / f"{k}-s.jpg"
            if big.exists() and small.exists():
                continue
            raw = get(ii.get("thumburl") or ii["url"])
            if raw is None:
                failed.append(k); print("FAILED", k, file=sys.stderr); continue
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            for path, w, qlt in ((big, 1280, 80), (small, 600, 78)):
                c = im.copy(); c.thumbnail((w, w * 2)); c.save(path, "JPEG", quality=qlt, optimize=True, progressive=True)
            print("saved", k); time.sleep(3)
            credits_path.write_text(json.dumps(credits, indent=1, ensure_ascii=False))
    credits_path.write_text(json.dumps(credits, indent=1, ensure_ascii=False))

    print(f"{trip}: {len(failed)} not downloaded this run", failed)

if __name__ == "__main__":
    for trip in sys.argv[1:]:
        run(trip)  # never fails the job: photos saved so far get committed; re-run fills the rest
