# Sri Lanka trip app

A phone-first trip planner for 23 Nov – 5 Dec 2026, served by GitHub Pages at `/sri-lanka-app/`.
Tabs: day plan (with a live "Now" marker in Colombo time and tick-offs), map, bookings and a to-do list.

- Edit the trip in `src/data.js`, the look in `src/template.html`, the behaviour in `src/app.js`.
- Run `python3 build.py` to rebuild `index.html`, then commit both.
- Photos come from `../sri-lanka-maldives/img/` (mirrored from Wikimedia Commons).
- No booking numbers, card details or passport data: the page is public.

## License and credit

The visual design follows the mobile UI of [TREK](https://github.com/mauriceboe/TREK) by Maurice Boe,
which is licensed under the GNU AGPL-3.0. This folder is therefore also released under the AGPL-3.0
(see `LICENSE`), and its full source is this folder. It is not TREK and is not affiliated with or
endorsed by the TREK project; per TREK's trademark policy it does not use the TREK name or logo as its own.
Leaflet 1.9.4 (BSD-2-Clause) is loaded from cdnjs and its stylesheet is inlined.
