"""Assemble the single-file app: python3 build.py [artifact_out]"""
import sys, pathlib
here = pathlib.Path(__file__).parent
t = (here/'src/template.html').read_text()
css = (here/'src/leaflet.css').read_text()
data = (here/'src/data.js').read_text()
app = (here/'src/app.js').read_text()
def make(base):
    return t.replace('/*LEAFLET_CSS*/', css).replace('/*IMG_BASE*/', base).replace('/*DATA_JS*/', data).replace('/*APP_JS*/', app)
page = make('../sri-lanka-maldives/img/')
(here/'index.html').write_text('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + page.replace('<div id="app">', '</head>\n<body>\n<div id="app">', 1) + '</body>\n</html>\n')
if len(sys.argv) > 1:
    pathlib.Path(sys.argv[1]).write_text(make('img/'))
