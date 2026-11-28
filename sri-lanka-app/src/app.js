(function () {
  "use strict";
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("slt:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("slt:" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const ICON = {
    bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    train: '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16M12 3v8M8 19l-2 3M18 22l-2-3M8 15h.01M16 15h.01"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    hotel: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    ext: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    img: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'
  };
  const ico = (n, cls) => '<svg class="ico' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + "</svg>";
  const HOTELS = { marriott: 1, laya: 1, vantage: 1, radisson: 1, jungles: 1, courtyard: 1 };
  const img = k => window.IMG_BASE + k + "-s.jpg";
  const gq = k => P[k].q + ", Sri Lanka";
  const gmapPlace = k => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(gq(k));
  function gmapDay(route) {
    const r = route.filter((k, i) => k !== route[i - 1]);
    if (r.length < 2) return gmapPlace(r[0]);
    const mid = r.slice(1, -1).slice(0, 9).map(gq).join("|");
    return "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + encodeURIComponent(gq(r[0])) +
      "&destination=" + encodeURIComponent(gq(r[r.length - 1])) + (mid ? "&waypoints=" + encodeURIComponent(mid) : "");
  }

  /* Colombo time (UTC+5:30, no DST) */
  function colomboNow() {
    const d = new Date(Date.now() + 330 * 60000);
    return { date: d.toISOString().slice(0, 10), mins: d.getUTCHours() * 60 + d.getUTCMinutes() };
  }
  const toMin = t => t ? (+t.slice(0, 2)) * 60 + (+t.slice(3, 5)) : null;
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parts = iso => { const d = new Date(iso + "T00:00:00Z"); return { dow: DOW[d.getUTCDay()], d: d.getUTCDate(), m: MON[d.getUTCMonth()] }; };

  const now = colomboNow();
  let todayIdx = DAYS.findIndex(d => d.date === now.date);
  const before = now.date < DAYS[0].date, after = now.date > DAYS[DAYS.length - 1].date;
  if (todayIdx < 0) todayIdx = before ? 0 : DAYS.length - 1;
  let cur = todayIdx;
  let view = "plan";
  let ticks = store.get("ticks", {});

  /* header */
  function sub() {
    if (before) return "Starts Mon 23 Nov";
    if (after) return "Trip complete";
    return "Day " + (todayIdx + 1) + " of " + DAYS.length + " · " + DAYS[todayIdx].city;
  }
  $("#sub").textContent = sub();

  function renderPager() {
    $("#pager").innerHTML = DAYS.map((d, i) => {
      const p = parts(d.date);
      const cls = ["chip", i === cur ? "on" : "", d.date < now.date ? "past" : "", d.date === now.date ? "today" : ""].join(" ");
      return '<button class="' + cls + '" role="tab" aria-selected="' + (i === cur) + '" data-i="' + i + '"><small>' + p.dow + "</small><b>" + p.d + "</b><i>" + esc(d.city) + "</i></button>";
    }).join("");
    const on = $("#pager .on");
    if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function nowIndex(d) {
    if (d.date !== now.date) return -1;
    let idx = -1;
    d.items.forEach((it, i) => {
      if (it.kind === "drop" || !it.t) return;
      const s = toMin(it.t);
      if (s <= now.mins) idx = i;
    });
    return idx;
  }

  function renderPlan() {
    const d = DAYS[cur], p = parts(d.date);
    const ni = nowIndex(d);
    const isPast = d.date < now.date, isToday = d.date === now.date;
    let n = 0;
    const rows = d.items.map((it, i) => {
      const id = d.date + ":" + i;
      const drop = it.kind === "drop";
      const done = !drop && (ticks[id] !== undefined ? ticks[id] : (isPast || (d.done && !drop)));
      const mv = it.kind === "move";
      const numbered = !drop && it.pin && !HOTELS[it.pin];
      if (numbered) n++;
      const dot = drop ? '<span class="dot plain"></span>' : numbered ? '<span class="dot">' + n + "</span>" : it.pin && HOTELS[it.pin] ? '<span class="dot mv">' + ico("bed") + "</span>" : mv ? '<span class="dot mv">' + ico("car") + "</span>" : '<span class="dot plain"></span>';
      const tags = [];
      if (it.kind === "add") tags.push('<span class="tag add">Add-on</span>');
      if (it.kind === "book") tags.push('<span class="tag book">' + ico("check") + "Booked</span>");
      if (it.kind === "warn") tags.push('<span class="tag warn">' + ico("alert") + "Check</span>");
      if (it.pin) tags.push('<a class="tag" target="_blank" rel="noopener" href="' + gmapPlace(it.pin) + '">' + ico("pin") + "Map</a>");
      if (it.src) tags.push('<a class="tag" target="_blank" rel="noopener" href="' + esc(it.src.u) + '">' + ico("ext") + esc(it.src.l) + "</a>");
      if (it.photos) tags.push('<a class="tag" target="_blank" rel="noopener" href="' + esc(it.photos) + '">' + ico("img") + "Photos</a>");
      const cls = ["row", drop ? "drop" : "", done ? "done" : "", i === ni ? "now" : ""].join(" ");
      return '<div class="' + cls + '">' +
        '<div class="tm">' + (it.t || "—") + (it.e ? "<small>" + it.e + "</small>" : "") + "</div>" + dot +
        '<div class="body">' + (i === ni ? '<span class="nowlbl">Now</span>' : "") + "<b>" + esc(it.title) + "</b>" + (it.note ? "<p>" + esc(it.note) + "</p>" : "") + (tags.length ? '<div class="tags">' + tags.join("") + "</div>" : "") + "</div>" +
        (drop ? "<span></span>" : '<button class="chk" aria-label="Mark done" aria-pressed="' + !!done + '" data-id="' + id + '">' + ico("check") + "</button>") +
        "</div>";
    }).join("");

    const badge = isToday ? '<span class="badge now">Today</span>' : isPast ? '<span class="badge">Done</span>' : "";
    $("#v-plan").innerHTML =
      '<div class="hero">' + '<img src="' + img(d.img) + '" alt="" loading="eager" onerror="this.style.display=\'none\'">' + badge +
      '<div class="ov"><small>' + p.dow + " " + p.d + " " + p.m + " · " + esc(d.city) + "</small><h2>" + esc(d.title) + "</h2></div></div>" +
      '<div class="stack">' +
      '<div class="card meta">' +
      '<div class="mrow' + (d.hotelWarn ? " warn" : "") + '"><span class="ib">' + ico("bed") + "</span><div><b>Tonight</b><span>" + esc(d.hotel) + "</span></div></div>" +
      '<div class="mrow"><span class="ib">' + ico("route") + "</span><div><b>Route</b><span>" + d.route.filter((k, i) => k !== d.route[i - 1]).map(k => esc(P[k].n)).join(" → ") + "</span>" +
      (d.drive ? "<span>" + esc(d.drive) + (d.driveSrc ? ' · <a target="_blank" rel="noopener" href="' + esc(d.driveSrc.u) + '">' + esc(d.driveSrc.l) + "</a>" : "") + "</span>" : "") + "</div></div>" +
      '<div class="actions"><a class="pill" target="_blank" rel="noopener" href="' + gmapDay(d.route) + '">' + ico("nav") + 'Open day in Google Maps</a><button class="pill soft" data-goto="map">' + ico("pin") + "See on map</button></div>" +
      "</div>" +
      '<div class="card tl">' + rows + "</div>" +
      "</div>";
  }

  /* map */
  let map = null, layer = null, mapDay = -1;
  function renderMapSeg() {
    const opts = [{ i: -1, l: "Whole trip" }].concat(DAYS.map((d, i) => { const p = parts(d.date); return { i, l: p.d + " " + p.m + " · " + d.city }; }));
    $("#mapSeg").innerHTML = opts.map(o => '<button data-md="' + o.i + '" class="' + (o.i === mapDay ? "on" : "") + '">' + esc(o.l) + "</button>").join("");
    const on = $("#mapSeg .on"); if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function drawMap() {
    if (!window.L) { $("#map").innerHTML = '<p style="padding:16px;color:#68686F">The map library didn’t load. Check your connection and reopen the page.</p>'; return; }
    if (!map) {
      map = L.map("map", { zoomControl: false, attributionControl: true });
      L.control.zoom({ position: "topright" }).addTo(map);
      const tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 19, attribution: "© OpenStreetMap contributors © CARTO"
      }).addTo(map);
      let warned = false;
      tiles.on("tileerror", () => { if (!warned) { warned = true; $("#mapNote").textContent = "Map tiles can’t load here, so only the pins and lines show. Open the page in your phone’s browser for the full map. Pins are approximate."; } });
    }
    if (layer) layer.remove();
    layer = L.layerGroup().addTo(map);
    const days = mapDay < 0 ? DAYS.map((d, i) => i) : [mapDay];
    const all = [];
    days.forEach(di => {
      const d = DAYS[di];
      const r = d.route.filter((k, i) => k !== d.route[i - 1]);
      const pts = r.map(k => [P[k].lat, P[k].lng]);
      all.push(...pts);
      L.polyline(pts, { color: "#101013", weight: mapDay < 0 ? 2.5 : 3, opacity: mapDay < 0 ? .55 : .8, dashArray: mapDay < 0 ? null : "6 6" }).addTo(layer);
      const seen = {};
      let num = 0;
      r.forEach(k => {
        if (seen[k]) return; seen[k] = 1;
        const isHotel = !!HOTELS[k];
        const label = isHotel ? "" : ++num;
        if (mapDay < 0 && !isHotel) {
          L.circleMarker([P[k].lat, P[k].lng], { radius: 4, color: "#fff", weight: 1.5, fillColor: "#101013", fillOpacity: 1 })
            .bindPopup("<b>" + esc(P[k].n) + "</b><br>" + parts(d.date).d + " " + parts(d.date).m + ' · <a target="_blank" rel="noopener" href="' + gmapPlace(k) + '">Google Maps</a>').addTo(layer);
          return;
        }
        const html = '<div class="mk' + (isHotel ? " hot" : "") + '">' + (isHotel ? "⌂" : label) + "</div>";
        L.marker([P[k].lat, P[k].lng], { icon: L.divIcon({ html, className: "", iconSize: [26, 26], iconAnchor: [13, 13] }) })
          .bindPopup("<b>" + esc(P[k].n) + '</b><br><a target="_blank" rel="noopener" href="' + gmapPlace(k) + '">Open in Google Maps</a>').addTo(layer);
      });
    });
    map.invalidateSize();
    if (all.length) map.fitBounds(all, { padding: [28, 28], maxZoom: 13 });
  }

  function renderBook() {
    const t = { car: "car", hotel: "bed", train: "train", flight: "plane" };
    $("#v-book").innerHTML = '<h2 class="sec">Bookings</h2><div class="stack">' + BOOKINGS.map(b =>
      '<div class="card bk"><span class="ib">' + ico(t[b.type]) + "</span><div><b>" + esc(b.title) + '</b><div class="w">' + esc(b.when) + "</div>" +
      '<span class="st ' + b.status + '">' + (b.status === "ok" ? "Confirmed" : "Check") + "</span><p>" + esc(b.note) + "</p></div></div>").join("") +
      '<a class="card next" href="https://shyam310195.github.io/Trip-itineraries/sri-lanka-maldives/#chapters" target="_blank" rel="noopener"><img src="' + img("dhoni") + '" alt="" onerror="this.style.display=\'none\'"><div><b>Next: the Maldives, 5–10 Dec</b><span>Anniversary on 7 Dec, birthday on 9 Dec. On the trip site.</span></div></a>' +
      "</div>";
  }

  function renderTodo() {
    const t = store.get("todo", {});
    const left = TODO.filter(x => !t[x.id]).length;
    $("#v-todo").innerHTML = '<h2 class="sec">To-do · ' + left + " left</h2>" + '<div class="card" style="margin-top:12px">' + TODO.map(x =>
      '<button class="todo' + (t[x.id] ? " done" : "") + '" data-todo="' + x.id + '" aria-pressed="' + !!t[x.id] + '"><span class="chk">' + ico("check") + "</span><div><span>" + esc(x.text) + "</span><small>" + esc(x.when) + "</small></div></button>").join("") +
      '</div><p class="foot">Ticks are saved on this phone only.</p>';
  }

  function show(v) {
    view = v;
    document.querySelectorAll(".dock button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
    ["plan", "map", "book", "todo"].forEach(k => { $("#v-" + k).hidden = k !== v; });
    $("#pager").hidden = !(v === "plan");
    if (v === "plan") renderPlan();
    if (v === "map") { renderMapSeg(); drawMap(); }
    if (v === "book") renderBook();
    if (v === "todo") renderTodo();
    try { history.replaceState(null, "", "#" + v); } catch (e) {}
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", e => {
    const chip = e.target.closest("#pager .chip");
    if (chip) { cur = +chip.dataset.i; renderPager(); renderPlan(); return; }
    const chk = e.target.closest(".chk[data-id]");
    if (chk) { const row = chk.closest(".row"); const v = !row.classList.contains("done"); ticks[chk.dataset.id] = v; store.set("ticks", ticks); renderPlan(); return; }
    const td = e.target.closest("[data-todo]");
    if (td) { const t = store.get("todo", {}); t[td.dataset.todo] = !t[td.dataset.todo]; store.set("todo", t); renderTodo(); return; }
    const dock = e.target.closest(".dock button");
    if (dock) { show(dock.dataset.v); return; }
    const go = e.target.closest("[data-goto]");
    if (go) { mapDay = cur; show("map"); return; }
    const md = e.target.closest("[data-md]");
    if (md) { mapDay = +md.dataset.md; renderMapSeg(); drawMap(); return; }
    if (e.target.closest("#todayBtn")) { e.preventDefault(); cur = todayIdx; mapDay = todayIdx; renderPager(); show("plan"); }
  });

  renderPager();
  const h = (location.hash || "").slice(1);
  mapDay = todayIdx;
  show(["plan", "map", "book", "todo"].includes(h) ? h : "plan");
  /* keep the "Now" marker fresh */
  setInterval(() => { const n = colomboNow(); if (n.date !== now.date) { location.reload(); return; } if (n.mins !== now.mins) { now.mins = n.mins; if (view === "plan") renderPlan(); } }, 60000);
})();
