/* Trip data for the Sri Lanka trip app.
   Source: itinerary-and-bookings.md (plan v5, with the 24 and 25 Nov route fixes) and the
   project's booking notes. Bundala bird safari dropped on 28 Nov at the travellers' request.
   Map pins are approximate (placed by hand, not geocoded); the "Open in Google Maps" buttons
   search each place by name so the phone's own routing is used. No booking numbers, card
   details or passport data on purpose: this page is public. */

const P = {
  cmb:        { n: "Bandaranaike Airport (CMB)", lat: 7.1808, lng: 79.8841, q: "Bandaranaike International Airport" },
  marriott:   { n: "Weligama Bay Marriott", lat: 5.9686, lng: 80.4350, q: "Weligama Bay Marriott Resort & Spa" },
  taprobane:  { n: "Taprobane Island view", lat: 5.9681, lng: 80.4231, q: "Taprobane Island Weligama" },
  coconut:    { n: "Coconut Tree Hill", lat: 5.9389, lng: 80.4650, q: "Coconut Tree Hill Mirissa" },
  mirissa:    { n: "Mirissa beach", lat: 5.9447, lng: 80.4589, q: "Mirissa Beach" },
  harbour:    { n: "Mirissa harbour", lat: 5.9450, lng: 80.4530, q: "Mirissa Fisheries Harbour" },
  turtle:     { n: "Turtle hatchery, Koggala area", lat: 5.9950, lng: 80.3150, q: "Turtle hatchery Habaraduwa" },
  stilt:      { n: "Stilt fishermen, Koggala", lat: 5.9870, lng: 80.3260, q: "Stilt fishermen Koggala" },
  koggala:    { n: "Koggala Lake", lat: 5.9950, lng: 80.3400, q: "Koggala Lake boat ride" },
  ahangama:   { n: "Ahangama", lat: 5.9733, lng: 80.3625, q: "Ahangama beach" },
  matara:     { n: "Paravi Duwa temple, Matara", lat: 5.9418, lng: 80.5480, q: "Paravi Duwa Temple Matara" },
  dondra:     { n: "Dondra Head lighthouse", lat: 5.9216, lng: 80.5895, q: "Dondra Head Lighthouse" },
  dikwella:   { n: "Dikwella", lat: 5.9650, lng: 80.6950, q: "Dikwella" },
  hummanaya:  { n: "Hummanaya blowhole", lat: 6.0010, lng: 80.7450, q: "Hummanaya Blow Hole" },
  hiriketiya: { n: "Hiriketiya bay", lat: 5.9640, lng: 80.7080, q: "Hiriketiya Beach" },
  unawatuna:  { n: "Unawatuna (Sun Diving)", lat: 6.0100, lng: 80.2490, q: "Sun Diving Unawatuna" },
  pagoda:     { n: "Japanese Peace Pagoda", lat: 6.0160, lng: 80.2390, q: "Japanese Peace Pagoda Unawatuna" },
  secret:     { n: "Secret Beach and Parrot Rock", lat: 5.9420, lng: 80.4600, q: "Parrot Rock Mirissa" },
  surf:       { n: "Weligama surf beach", lat: 5.9738, lng: 80.4290, q: "Weligama Beach surf" },
  galle:      { n: "Galle Fort", lat: 6.0260, lng: 80.2170, q: "Galle Fort" },
  bundala:    { n: "Bundala National Park", lat: 6.1950, lng: 81.2100, q: "Bundala National Park" },
  tissa:      { n: "Tissa Wewa and stupa", lat: 6.2800, lng: 81.2870, q: "Tissamaharama Raja Maha Vihara" },
  kirinda:    { n: "Kirinda temple and beach", lat: 6.2140, lng: 81.3330, q: "Kirinda Temple" },
  laya:       { n: "Laya Safari Hotel", lat: 6.2360, lng: 81.3560, q: "Laya Safari Hotel Yala" },
  yala:       { n: "Yala, Palatupana gate", lat: 6.2750, lng: 81.4040, q: "Yala National Park Palatupana entrance" },
  kataragama: { n: "Kataragama temple", lat: 6.4134, lng: 81.3346, q: "Kataragama Devalaya" },
  ravana:     { n: "Ravana Falls", lat: 6.8410, lng: 81.0520, q: "Ravana Falls" },
  vantage:    { n: "Vantage Hills, Ella", lat: 6.8700, lng: 81.0480, q: "Vantage Hills Ella" },
  ninearch:   { n: "Nine Arch Bridge", lat: 6.8768, lng: 81.0608, q: "Nine Arch Bridge Ella" },
  ellagap:    { n: "Ella Gap", lat: 6.8667, lng: 81.0466, q: "Ella Gap viewpoint" },
  ella:       { n: "Ella town", lat: 6.8756, lng: 81.0464, q: "Ella Sri Lanka" },
  lipton:     { n: "Lipton's Seat", lat: 6.8017, lng: 80.9586, q: "Lipton's Seat" },
  dambatenne: { n: "Dambatenne Tea Factory", lat: 6.7905, lng: 80.9737, q: "Dambatenne Tea Factory" },
  diyaluma:   { n: "Diyaluma Falls", lat: 6.7323, lng: 81.0300, q: "Diyaluma Falls" },
  zipline:    { n: "Flying Ravana zipline", lat: 6.8690, lng: 81.0520, q: "Flying Ravana Zipline Ella" },
  demodara:   { n: "Demodara Loop", lat: 6.9050, lng: 81.0560, q: "Demodara Loop" },
  ellastn:    { n: "Ella station", lat: 6.8762, lng: 81.0466, q: "Ella Railway Station" },
  nanuoya:    { n: "Nanu Oya station", lat: 6.9460, lng: 80.7930, q: "Nanu Oya Railway Station" },
  gregory:    { n: "Gregory Lake and Victoria Park", lat: 6.9580, lng: 80.7780, q: "Gregory Lake Nuwara Eliya" },
  ramboda:    { n: "Ramboda Falls", lat: 7.0570, lng: 80.6960, q: "Ramboda Falls" },
  tooth:      { n: "Temple of the Tooth", lat: 7.2936, lng: 80.6413, q: "Temple of the Sacred Tooth Relic Kandy" },
  kandylake:  { n: "Kandy Lake", lat: 7.2920, lng: 80.6450, q: "Kandy Lake" },
  bahirava:   { n: "Bahiravokanda Buddha", lat: 7.2965, lng: 80.6280, q: "Bahirawakanda Vihara Buddha Statue" },
  radisson:   { n: "Radisson Hotel Kandy", lat: 7.2905, lng: 80.6472, q: "Radisson Hotel Kandy" },
  kandyview:  { n: "Kandy View Point", lat: 7.2890, lng: 80.6390, q: "Kandy View Point Arthur's Seat" },
  peradeniya: { n: "Peradeniya Botanical Garden", lat: 7.2690, lng: 80.5960, q: "Royal Botanic Gardens Peradeniya" },
  matale:     { n: "Muthumariamman temple, Matale", lat: 7.4700, lng: 80.6230, q: "Sri Muthumariamman Temple Matale" },
  watergdn:   { n: "Sigiriya water gardens", lat: 7.9560, lng: 80.7550, q: "Sigiriya Water Gardens" },
  jungles:    { n: "Sigiriya Jungles, Kimbissa", lat: 7.9300, lng: 80.7330, q: "Sigiriya Jungles Resort" },
  tankbund:   { n: "Sigiriya tank bund", lat: 7.9530, lng: 80.7450, q: "Sigiriya Wewa" },
  dambulla:   { n: "Dambulla Cave Temple", lat: 7.8567, lng: 80.6490, q: "Dambulla Cave Temple" },
  polonnaruwa:{ n: "Polonnaruwa", lat: 7.9660, lng: 81.0040, q: "Gal Vihara Polonnaruwa" },
  minneriya:  { n: "Minneriya National Park", lat: 8.0350, lng: 80.8800, q: "Minneriya National Park" },
  ritigala:   { n: "Ritigala forest monastery", lat: 8.1100, lng: 80.6500, q: "Ritigala Forest Monastery" },
  athugala:   { n: "Athugala, Kurunegala", lat: 7.4870, lng: 80.3700, q: "Athugala Kurunegala Buddha" },
  pinnawala:  { n: "Pinnawala Elephant Orphanage", lat: 7.3006, lng: 80.3880, q: "Pinnawala Elephant Orphanage" },
  courtyard:  { n: "Courtyard Colombo", lat: 6.9080, lng: 79.8530, q: "Courtyard by Marriott Colombo" },
  galleface:  { n: "Galle Face Green", lat: 6.9245, lng: 79.8450, q: "Galle Face Green" },
  gangaramaya:{ n: "Gangaramaya and Seema Malaka", lat: 6.9165, lng: 79.8566, q: "Gangaramaya Temple" },
  indepsq:    { n: "Independence Square", lat: 6.9040, lng: 79.8680, q: "Independence Memorial Hall Colombo" },
  lotus:      { n: "Lotus Tower", lat: 6.9271, lng: 79.8580, q: "Lotus Tower Colombo" },
  dutch:      { n: "Dutch Hospital precinct", lat: 6.9339, lng: 79.8433, q: "Dutch Hospital Shopping Precinct Colombo" }
};

const G = q => "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(q);
const R = (a, b) => "https://www.rome2rio.com/s/" + a + "/" + b;

/* kind: "add" = an add-on, "drop" = dropped (shown struck through), "warn" = needs a check,
   "book" = booked item, "move" = travel/transfer. */
const DAYS = [
  {
    date: "2026-11-23", city: "Weligama", title: "Land, sleep, first sunset", img: "coconut",
    hotel: "Weligama Bay Marriott", done: true,
    route: ["cmb", "marriott", "taprobane", "coconut", "mirissa", "marriott"],
    items: [
      { t: "02:00", title: "Land at Colombo", note: "ETA, SIM and cash.", kind: "move", pin: "cmb" },
      { t: "02:45", e: "05:00", title: "Drive to Weligama", note: "Early check-in requested.", kind: "move" },
      { t: "05:00", e: "11:00", title: "Sleep", note: "Brunch at 11:30." },
      { t: "14:00", e: "16:30", title: "Weligama beach and Taprobane Island view", pin: "taprobane", photos: G("Taprobane island Weligama") },
      { t: "17:00", e: "18:30", title: "Coconut Tree Hill sunset", pin: "coconut", photos: G("Coconut Tree Hill Mirissa") },
      { t: "19:00", title: "Dinner on Mirissa beach", note: "Back about 21:00.", pin: "mirissa" }
    ]
  },
  {
    date: "2026-11-24", city: "Weligama", title: "Whales, stilt fishermen, Koggala Lake", img: "whale",
    hotel: "Weligama Bay Marriott", done: true,
    route: ["marriott", "harbour", "turtle", "stilt", "koggala", "ahangama", "marriott"],
    items: [
      { t: "06:30", e: "11:30", title: "Whale watching", pin: "harbour", src: { l: "Nomadic Boys", u: "https://nomadicboys.com/whale-watching-mirissa/" }, photos: G("Mirissa blue whale watching") },
      { t: "12:00", title: "Lunch" },
      { t: "13:30", e: "14:30", title: "Turtle hatchery, Koggala area", kind: "add", pin: "turtle", photos: G("Koggala turtle hatchery") },
      { t: "15:00", e: "15:30", title: "Stilt fishermen", pin: "stilt", photos: G("Koggala stilt fishermen") },
      { t: "15:45", e: "17:30", title: "Koggala Lake boat ride", pin: "koggala", photos: G("Koggala lake boat cinnamon island") },
      { t: "18:00", title: "Ahangama sunset, then dinner", note: "Back about 20:30.", pin: "ahangama" }
    ]
  },
  {
    date: "2026-11-25", city: "Weligama", title: "The east loop", img: "dondra",
    hotel: "Weligama Bay Marriott", done: true,
    drive: "About 2 h 20 of driving (estimate)",
    driveSrc: { l: "Rome2rio", u: R("Weligama", "Matara") },
    route: ["marriott", "matara", "dondra", "dikwella", "hummanaya", "hiriketiya", "marriott"],
    items: [
      { t: "08:30", title: "Leave", kind: "move" },
      { t: "08:50", e: "10:20", title: "Matara: Paravi Duwa temple and the Star Fort", pin: "matara", photos: G("Paravi Duwa temple Matara") },
      { t: "10:35", e: "11:20", title: "Dondra Head lighthouse", note: "Turn right at Devinuwara, about 1.2 km.", pin: "dondra", photos: G("Dondra Head lighthouse") },
      { t: "12:00", title: "Lunch around Dikwella", pin: "dikwella" },
      { t: "13:15", e: "14:45", title: "Hummanaya blowhole", note: "1.1 km off the road at Kudawella; about 20 min walk down steps.", kind: "add", pin: "hummanaya", src: { l: "Wikipedia", u: "https://en.wikipedia.org/wiki/Hummanaya" }, photos: G("Hummanaya blowhole") },
      { t: "15:00", e: "18:30", title: "Hiriketiya bay: swim and sunset", pin: "hiriketiya", photos: G("Hiriketiya beach") },
      { t: "19:00", title: "Dinner at Hiriketiya", note: "Back about 20:45." }
    ]
  },
  {
    date: "2026-11-26", city: "Weligama", title: "Dive, Peace Pagoda, Mirissa evening", img: "pagoda",
    hotel: "Weligama Bay Marriott", done: true,
    drive: "About 1 h 20 of driving",
    driveSrc: { l: "Rome2rio", u: R("Weligama", "Unawatuna") },
    route: ["marriott", "unawatuna", "pagoda", "marriott", "secret", "marriott"],
    items: [
      { t: "07:45", title: "Leave", kind: "move" },
      { t: "08:15", e: "12:00", title: "Sun Diving, Rock Island at 10 m", pin: "unawatuna", src: { l: "listing", u: "https://www.travelocity.com/things-to-do/discover-scuba-diving-in-beautiful-unawatuna-bay.a2332923.activity-details" }, photos: G("Unawatuna scuba diving") },
      { t: "12:00", title: "Lunch in Unawatuna" },
      { t: "13:30", e: "14:30", title: "Japanese Peace Pagoda and Jungle Beach", pin: "pagoda", photos: G("Japanese Peace Pagoda Unawatuna") },
      { t: "15:00", e: "16:30", title: "Rest at the hotel" },
      { t: "16:45", e: "18:30", title: "Mirissa Secret Beach and Parrot Rock, sunset", pin: "secret", photos: G("Mirissa Parrot Rock") },
      { t: "18:30", title: "Cafés and dinner in Mirissa", note: "Back about 21:00." }
    ]
  },
  {
    date: "2026-11-27", city: "Weligama", title: "Surf, then Galle Fort", img: "galle",
    hotel: "Weligama Bay Marriott", done: true,
    drive: "About 1 h of driving",
    driveSrc: { l: "Rome2rio", u: R("Weligama", "Galle") },
    route: ["surf", "marriott", "galle", "marriott"],
    items: [
      { t: "07:00", e: "09:00", title: "Beginner surf lesson", pin: "surf", photos: G("Weligama surf lesson") },
      { t: "09:30", e: "14:00", title: "Breakfast, beach and pool", note: "Pack before Galle: Yala starts at 05:00 on 28 Nov." },
      { t: "14:30", title: "Leave for Galle", kind: "move" },
      { t: "15:00", e: "18:45", title: "Galle Fort, sunset on the ramparts", pin: "galle", photos: G("Galle Fort ramparts sunset") },
      { t: "19:00", title: "Farewell dinner in the fort", note: "Back about 21:15." },
      { t: "09:30", e: "15:30", title: "Madu River boat safari, Balapitiya", note: "Dropped 24 Nov to cut driving.", kind: "drop", photos: G("Madu River boat safari") }
    ]
  },
  {
    date: "2026-11-28", city: "Yala", title: "Tissa, Kirinda, first safari", img: "leopard",
    hotel: "Laya Safari Hotel (breakfast and dinner)",
    route: ["marriott", "tissa", "kirinda", "laya", "yala", "kataragama", "laya"],
    items: [
      { t: "05:00", title: "Check out (breakfast box)", kind: "move" },
      { t: "07:30", e: "10:30", title: "Bundala bird safari", note: "Dropped 28 Nov.", kind: "drop", photos: G("Bundala national park flamingo") },
      { t: "11:00", e: "11:45", title: "Tissa Wewa and the stupa", pin: "tissa", photos: G("Tissamaharama stupa Tissa Wewa") },
      { t: "12:00", e: "12:45", title: "Kirinda temple and beach", note: "Short steps.", kind: "add", pin: "kirinda", photos: G("Kirinda temple rock") },
      { t: "13:00", title: "Lunch at Laya Safari; check-in from 14:00", pin: "laya", kind: "book" },
      { t: "14:30", e: "18:00", title: "Yala safari 1", pin: "yala", src: { l: "Pelago", u: "https://www.pelago.com/en/activity/p310ohauq-yala-national-park-private-safari-yala-national-park" }, photos: G("Yala leopard safari") },
      { t: "18:45", e: "20:30", title: "Kataragama evening puja", pin: "kataragama", photos: G("Kataragama evening puja") },
      { t: "21:00", title: "Dinner at the lodge" }
    ]
  },
  {
    date: "2026-11-29", city: "Ella", title: "Dawn safari, then up to Ella", img: "ninearch",
    hotel: "Vantage Hills, Ella (breakfast; pay at hotel)",
    route: ["laya", "yala", "laya", "ravana", "vantage", "ninearch", "ellagap", "ella"],
    items: [
      { t: "05:30", e: "10:00", title: "Yala safari 2", pin: "yala", photos: G("Yala leopard safari") },
      { t: "10:00", title: "Breakfast, then check out", pin: "laya" },
      { t: "11:00", e: "13:30", title: "Drive to Ella with the Ravana Falls stop", kind: "move", pin: "ravana", photos: G("Ravana Falls Ella") },
      { t: "14:00", title: "Check in at Vantage Hills", pin: "vantage", kind: "book" },
      { t: "15:00", e: "17:00", title: "Nine Arch Bridge", pin: "ninearch", photos: G("Nine Arch Bridge Ella train") },
      { t: "17:30", title: "Sunset over Ella Gap", pin: "ellagap" },
      { t: "19:30", title: "Dinner in town", note: "Back about 21:00.", pin: "ella" }
    ]
  },
  {
    date: "2026-11-30", city: "Ella", title: "Lipton's Seat, Diyaluma, zipline", img: "lipton",
    hotel: "Vantage Hills, Ella",
    route: ["vantage", "lipton", "dambatenne", "diyaluma", "ella", "zipline", "demodara", "vantage"],
    items: [
      { t: "05:45", title: "Leave", kind: "move" },
      { t: "06:45", e: "08:45", title: "Lipton's Seat, breakfast at the top", pin: "lipton", photos: G("Lipton's Seat Haputale") },
      { t: "09:00", e: "10:00", title: "Dambatenne Tea Factory", pin: "dambatenne", photos: G("Dambatenne tea factory") },
      { t: "11:15", e: "12:00", title: "Diyaluma Falls (roadside view)", kind: "add", pin: "diyaluma", photos: G("Diyaluma falls") },
      { t: "13:15", title: "Lunch in Ella", pin: "ella" },
      { t: "14:30", e: "15:30", title: "Zipline", note: "Open until about 16:30.", pin: "zipline", src: { l: "ZRI Adventures", u: "https://www.expedia.com/things-to-do/zip-lining-experience-in-ella.a46550508.activity-details" }, photos: G("Flying Ravana zipline Ella") },
      { t: "16:00", e: "17:15", title: "Demodara Loop", pin: "demodara", photos: G("Demodara loop") },
      { t: "17:45", title: "Sunset; dinner at 19:30", note: "Back about 20:30." }
    ]
  },
  {
    date: "2026-12-01", city: "Kandy", title: "Train to Nanu Oya, then Kandy by night", img: "tea",
    hotel: "Radisson Hotel Kandy (room only)",
    route: ["vantage", "ellastn", "nanuoya", "gregory", "ramboda", "tooth", "kandylake", "bahirava", "radisson"],
    items: [
      { t: "08:00", title: "Breakfast, check out", note: "The driver takes the bags and drives ahead to Nanu Oya." },
      { t: "09:15", title: "Be at Ella station", pin: "ellastn", kind: "warn" },
      { t: "09:50", e: "12:10", title: "Scenic train, Ella to Nanu Oya", note: "Booked: train 111016, observation class seats 31 and 32. The m-ticket is in your email.", kind: "book", pin: "nanuoya", photos: G("ella nanu oya train tea country") },
      { t: "12:30", e: "14:15", title: "Gregory Lake boat ride, Victoria Park, lunch", kind: "add", pin: "gregory", photos: G("Gregory Lake boat Nuwara Eliya") },
      { t: "14:30", e: "15:15", title: "Tea factory tour", photos: G("Nuwara Eliya tea estate") },
      { t: "15:45", e: "16:00", title: "Ramboda Falls", pin: "ramboda", photos: G("Ramboda Falls") },
      { t: "18:15", title: "Reach Kandy (estimate), straight to the temple", kind: "move" },
      { t: "18:30", e: "19:45", title: "Temple of the Tooth evening puja", note: "Open until 20:00.", pin: "tooth", photos: G("Temple of the Tooth Kandy evening") },
      { t: "19:45", title: "Kandy Lake walk", pin: "kandylake" },
      { t: "20:00", e: "20:30", title: "Bahiravokanda Buddha, lit up", kind: "add", pin: "bahirava", photos: G("Bahirawakanda Buddha Kandy") },
      { t: "20:45", title: "Dinner; late check-in about 22:00", pin: "radisson", kind: "book" },
      { t: "", title: "Hakgala Botanical Garden, Seetha Amman Temple, Kandyan dance show", note: "Removed at your request on 14 Nov.", kind: "drop" }
    ]
  },
  {
    date: "2026-12-02", city: "Sigiriya", title: "Peradeniya, Matale, Sigiriya", img: "peradeniya",
    hotel: "Sigiriya Jungles Resort, Kimbissa (room only)",
    drive: "Temple before the spice garden: the gardens are north of Matale on the Sigiriya road",
    driveSrc: { l: "Rome2rio", u: R("Peradeniya", "Matale") },
    route: ["radisson", "kandyview", "peradeniya", "matale", "watergdn", "jungles", "tankbund", "jungles"],
    items: [
      { t: "06:45", title: "Check out, Kandy View Point on the way", pin: "kandyview", photos: G("Kandy view point Arthur's seat") },
      { t: "07:30", e: "09:30", title: "Peradeniya Botanical Garden", pin: "peradeniya", photos: G("Peradeniya botanical garden avenue") },
      { t: "10:30", e: "11:15", title: "Muthumariamman temple, Matale", pin: "matale", photos: G("Matale Muthumariamman temple") },
      { t: "11:30", e: "12:15", title: "Spice garden on the A9 north of Matale", src: { l: "Lonely Planet", u: "https://www.lonelyplanet.com/points-of-interest/euphoria-spice-herbal/1493467" }, photos: G("Matale spice garden") },
      { t: "12:15", e: "13:00", title: "Lunch, then about 50 min to Sigiriya", kind: "move" },
      { t: "14:30", e: "16:00", title: "Sigiriya water gardens and museum (no climb)", note: "Check the ticket price first.", kind: "add", pin: "watergdn", photos: G("Sigiriya water gardens") },
      { t: "16:15", title: "Check in, rest", pin: "jungles", kind: "book" },
      { t: "17:15", e: "18:15", title: "Sunset from the tank bund", pin: "tankbund", photos: G("Sigiriya rock sunset lake") },
      { t: "19:30", title: "Dinner", note: "Back about 20:30." }
    ]
  },
  {
    date: "2026-12-03", city: "Sigiriya", title: "Dambulla, Polonnaruwa, elephants", img: "galvihara",
    hotel: "Sigiriya Jungles Resort, Kimbissa",
    route: ["jungles", "dambulla", "polonnaruwa", "minneriya", "jungles"],
    items: [
      { t: "07:00", title: "Leave after breakfast", kind: "move" },
      { t: "07:30", e: "09:00", title: "Dambulla Cave Temple", note: "Opens 07:00.", pin: "dambulla", src: { l: "Amazing Lanka", u: "https://amazinglanka.com/wp/dambulla-temple/" }, photos: G("Dambulla cave temple interior") },
      { t: "10:30", e: "13:30", title: "Polonnaruwa", pin: "polonnaruwa", photos: G("Gal Vihara Polonnaruwa") },
      { t: "13:30", title: "Lunch" },
      { t: "14:30", e: "17:30", title: "Elephant jeep, Minneriya", pin: "minneriya", src: { l: "GetYourGuide", u: "https://www.getyourguide.com/dambulla-l104454/from-sigiriya-polonnaruwa-day-tour-with-minneriya-safari-t640184/" }, photos: G("Minneriya elephant gathering") },
      { t: "19:00", title: "Dinner" },
      { t: "", title: "Hot-air balloon", note: "Removed earlier.", kind: "drop" }
    ]
  },
  {
    date: "2026-12-04", city: "Colombo", title: "Ritigala to Colombo, the long last day", img: "gallefacegreen",
    hotel: "Colombo: Courtyard on points was the plan; no booking found as of 17 Nov",
    hotelWarn: true,
    route: ["jungles", "ritigala", "athugala", "pinnawala", "courtyard", "galleface", "gangaramaya", "indepsq", "lotus", "dutch", "courtyard"],
    items: [
      { t: "06:00", title: "Check out (breakfast box); bags stay in the car", kind: "move" },
      { t: "07:00", e: "09:00", title: "Ritigala forest monastery", note: "Uneven paths.", kind: "add", pin: "ritigala", photos: G("Ritigala forest monastery") },
      { t: "11:15", e: "12:00", title: "Athugala, Kurunegala", pin: "athugala", photos: G("Athugala Kurunegala Buddha") },
      { t: "13:00", e: "14:45", title: "Pinnawala: lunch by the river, herd bathing at 14:00", note: "Open 08:30–17:30; USD 17.70 foreign adult, USD 11.80 SAARC.", kind: "add", pin: "pinnawala", src: { l: "National Zoo", u: "https://www.nationalzoo.gov.lk/pinnawala/" }, photos: G("Pinnawala elephants river bathing") },
      { t: "14:45", e: "16:30", title: "Drive into Colombo", kind: "move" },
      { t: "16:45", e: "17:15", title: "Check in, drop bags, freshen up", pin: "courtyard", kind: "warn" },
      { t: "17:30", e: "18:30", title: "Galle Face Green at sunset", pin: "galleface", photos: G("Galle Face Green sunset") },
      { t: "18:40", e: "19:40", title: "Gangaramaya and Seema Malaka", note: "Open until 20:00.", pin: "gangaramaya", photos: G("Seema Malaka Colombo") },
      { t: "19:50", e: "20:05", title: "Independence Square, lit up", pin: "indepsq", photos: G("Independence Memorial Hall Colombo") },
      { t: "20:15", title: "Drive past the lit-up Lotus Tower", pin: "lotus", photos: G("Lotus Tower Colombo night") },
      { t: "20:30", e: "21:45", title: "Dinner at the Dutch Hospital precinct", pin: "dutch", photos: G("Dutch Hospital Colombo") },
      { t: "22:00", title: "Back; weigh the bags (20 kg each on VietJet)", kind: "warn" },
      { t: "", title: "National Museum", note: "Doesn't fit: closes 17:00 and you reach Colombo about 16:30. Pettah, on the way in, takes its place.", kind: "drop", src: { l: "Amazing Lanka", u: "https://amazinglanka.com/wp/colombo-national-museum/" } }
    ]
  },
  {
    date: "2026-12-05", city: "Colombo", title: "Fly to Malé", img: "aerial",
    hotel: "Lonuveli, Hulhumalé (Maldives)",
    route: ["courtyard", "cmb"],
    items: [
      { t: "08:00", title: "Leave for the airport", note: "About 45 min.", kind: "move" },
      { t: "12:15", e: "13:10", title: "VietJet VJ-1815 to Malé", note: "20 kg checked bag each.", kind: "book", pin: "cmb" }
    ]
  }
];

const BOOKINGS = [
  { type: "car", title: "Lion Cab & Tours: Prius and driver", when: "23 Nov – 5 Dec", status: "ok", note: "All-in: fuel, tolls, driver costs, all km, the bags from Ella to Nanu Oya. Jeeps, entries and boats are extra. Second half in cash on the final night." },
  { type: "hotel", title: "Weligama Bay Marriott", when: "23 – 28 Nov · 5 nights", status: "ok", note: "King, ocean view. On points." },
  { type: "hotel", title: "Laya Safari Hotel, Yala", when: "28 – 29 Nov · 1 night", status: "ok", note: "Breakfast and dinner." },
  { type: "hotel", title: "Vantage Hills, Ella", when: "29 Nov – 1 Dec · 2 nights", status: "ok", note: "Breakfast. Pay at the hotel." },
  { type: "train", title: "Train Ella → Nanu Oya", when: "Tue 1 Dec · 09:50 → about 12:10", status: "ok", note: "Train 111016, seats 31 and 32. Be at Ella station by 09:15." },
  { type: "hotel", title: "Radisson Hotel Kandy", when: "1 – 2 Dec · 1 night", status: "ok", note: "Room only. Late check-in about 22:00." },
  { type: "hotel", title: "Sigiriya Jungles Resort, Kimbissa", when: "2 – 4 Dec · 2 nights", status: "check", note: "Booked, but payment was still pending on 17 Nov. Check it went through." },
  { type: "hotel", title: "Colombo (Courtyard on points was the plan)", when: "4 – 5 Dec · 1 night", status: "check", note: "No booking found in email as of 17 Nov." },
  { type: "flight", title: "VietJet VJ-1815, Colombo → Malé", when: "Sat 5 Dec · 12:15 → 13:10", status: "ok", note: "20 kg checked bag each. Leave for the airport at 08:00." }
];

const TODO = [
  { id: "sig-pay", text: "Confirm the Sigiriya Jungles payment went through", when: "before 2 Dec" },
  { id: "cmb-hotel", text: "Confirm the Colombo hotel for 4 Dec", when: "before 4 Dec" },
  { id: "yala-jeeps", text: "Yala safari jeeps: 28 Nov afternoon and 29 Nov dawn", when: "28 Nov" },
  { id: "zipline", text: "Zipline in Ella", when: "30 Nov" },
  { id: "bags", text: "Buy extra VietJet bag weight if needed", when: "by 1 Dec" },
  { id: "train", text: "Be at Ella station by 09:15; bags go with the driver", when: "1 Dec" },
  { id: "tooth", text: "Temple of the Tooth tickets (on the day)", when: "1 Dec" },
  { id: "pera", text: "Peradeniya tickets (on the day)", when: "2 Dec" },
  { id: "water", text: "Sigiriya water gardens: check the ticket price and last entry", when: "2 Dec" },
  { id: "minneriya", text: "Minneriya elephant jeep", when: "3 Dec" },
  { id: "dambulla", text: "Dambulla and Polonnaruwa tickets (on the day)", when: "3 Dec" },
  { id: "pinna", text: "Pinnawala tickets (on the day)", when: "4 Dec" },
  { id: "weigh", text: "Weigh the bags: 20 kg each", when: "4 Dec" },
  { id: "driver", text: "Pay the driver the second half in cash", when: "final night" }
];
