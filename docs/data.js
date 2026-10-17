// Zion Family Trip — October 22–25, 2026
// All trip content lives here. Edit this file and bump CACHE_VERSION in sw.js to publish changes.

const TRIP = {
  title: "Zion",
  dates: "October 22–25, 2026",
  startDate: "2026-10-22",
  endDate: "2026-10-25",
  travelers: "Chris, Whitney & Reid",
  countdownSub: "Thu Oct 22 · AA 6357 departs DFW 6:40 PM · Everything booked is under Info → Reservations.",
  home: {
    name: "Cable Mountain Lodge",
    address: "147 Zion Park Blvd, Springdale, UT",
    mapsQuery: "Cable Mountain Lodge, 147 Zion Park Blvd, Springdale, UT",
    notes: "Hillside Classic Suite with kitchen · pool + hot tub · right next to the park's pedestrian entrance (5-min walk to the Visitor Center + shuttle) · Check-in 3 PM · Check-out 11 AM · 435-772-3366",
  },

  days: [
    {
      date: "2026-10-22",
      label: "Thu, Oct 22",
      title: "Travel Day",
      subtitle: "Evening flight, pick up the Jeep, drive up the river to Springdale.",
      events: [
        {
          start: "18:40", end: "20:52",
          icon: "✈️",
          title: "Fly DFW → SGU (St. George)",
          details: [
            "American Airlines 6357 (American Eagle / SkyWest) · departs DFW 6:40 PM Central, lands SGU 8:52 PM Mountain",
            "Seats 8A, 8B, 8C — together · Main Cabin Extra · 1st checked bag free",
            "Regional jet = snacks only. Eat dinner at DFW before boarding.",
            "Check in on the American app 24 hrs before (Wed ~6:40 PM)",
          ],
          reservation: {
            vendor: "American Airlines",
            conf: "Conf code is in the AA email (kept off this page on purpose)",
            phone: "800-433-7300",
          },
        },
        {
          start: "21:00",
          icon: "🚙",
          title: "Pick up the Jeep — Enterprise, SGU",
          details: [
            "Exit through security — Enterprise counter is on your RIGHT",
            "Counter is staffed only at reservation times. If no one's there, call the number posted at the counter to reach an agent.",
            "Jeep Wrangler Unlimited (or similar) · unlimited miles · collision protection already bought through Expedia",
            "$311.32 due at the counter · credit card in the driver's name for the deposit",
            "Install Reid's booster seat before leaving the lot (Utah requires one under 8)",
            "If the flight is late, call Enterprise so they hold the car",
          ],
          maps: "St. George Regional Airport, 4550 S Airport Pkwy, St George, UT",
          reservation: {
            vendor: "Enterprise (via Expedia)",
            conf: "Conf 77332400 · Expedia itin # 73547717867894",
            phone: "833-694-0147",
          },
        },
        {
          start: "21:20",
          icon: "🛣️",
          title: "Drive to Springdale (~50 min)",
          details: [
            "I-15 north → UT-9 east through Hurricane (locals say \"HURR-uh-kun\"), La Verkin and Virgin to Springdale",
            "Groceries for the suite kitchen: Lin's Market in Hurricane is right on the route — if it's closed, Sol Foods in Springdale opens early Friday",
            "Dark, two-lane road after Hurricane — watch for deer",
          ],
          maps: "Lin's Fresh Market, Hurricane, UT",
        },
        {
          start: "22:15",
          icon: "🏨",
          title: "Check in — Cable Mountain Lodge",
          details: [
            "147 Zion Park Blvd · Hillside Classic Suite",
            "Late arrival — call ahead so they expect you after 10 PM",
            "The Watchman is the big cliff to the south; the river is right behind the lodge",
          ],
          maps: "Cable Mountain Lodge, 147 Zion Park Blvd, Springdale, UT",
          reservation: {
            vendor: "Cable Mountain Lodge (via Expedia)",
            conf: "Expedia itin # 73547715732650 · 3 nights",
            phone: "435-772-3366",
          },
        },
      ],
    },
    {
      date: "2026-10-23",
      label: "Fri, Oct 23",
      title: "The Canyon — Horses, Pools & the Narrows",
      subtitle: "The Jeep stays parked. Shuttle all day from next door.",
      events: [
        {
          start: "08:00",
          icon: "🥣",
          title: "Breakfast in the suite (or FeelLove / Perks coffee)",
          details: [
            "Layers: 40s this morning, upper 60s by afternoon",
            "LONG PANTS + closed-toe shoes for all three (horse ride rules)",
            "Pack light: the ride bans bags, backpacks, purses and water bottles. Bring one small daypack for the afternoon and ask at check-in where it can wait during the ride (see Info → Still to do).",
            "Water shoes + dry socks for the Narrows this afternoon",
          ],
        },
        {
          start: "09:15",
          icon: "🚌",
          title: "Visitor Center → board the shuttle by 9:30",
          details: [
            "5-min walk from the lodge through the pedestrian entrance",
            "Show the America the Beautiful pass (Recreation.gov order # 0896259208-1) — it's still valid, so no $35 fee",
            "Grab Reid a FREE Junior Ranger booklet inside",
            "Canyon Trail Rides says board the shuttle at least 90 min before the ride",
            "Ride to stop 5, Zion Lodge (~35 min)",
          ],
          maps: "Zion Canyon Visitor Center, Springdale, UT",
        },
        {
          start: "10:30",
          icon: "📝",
          title: "Check in for the horse ride — 30 min early",
          details: [
            "The brown building next to the horse corral, by the Emerald Pools lot — across the road from Zion Lodge",
            "⚠️ “If late, your horse will be rented to someone else”",
            "Pay at check-in: $187.20 (not prepaid)",
          ],
          maps: "Zion Lodge, Springdale, UT",
        },
        {
          start: "11:00", end: "12:00",
          icon: "🐴",
          title: "Horseback ride — Virgin River to Court of the Patriarchs",
          details: [
            "1 hour along the river · 3 riders (7+ yrs, under 220 lbs)",
            "Rules: NO bags/backpacks/purses · NO water bottles · NO open-toe shoes · ball caps OK, big-brim hats must be tied on · ONE camera OR binoculars per person",
          ],
          reservation: {
            vendor: "Canyon Trail Rides (booked via Peek)",
            conf: "Fri Oct 23 · 11:00 AM · 3 riders",
            phone: "435-679-8665",
          },
        },
        {
          start: "12:15",
          icon: "🥪",
          title: "Lunch — Zion Lodge lawn",
          details: ["Castle Dome Café window, eat under the giant cottonwood · no reservation needed"],
          maps: "Zion Lodge, Springdale, UT",
        },
        {
          start: "13:00",
          icon: "💧",
          title: "Lower Emerald Pool (optional)",
          details: [
            "1.2 mi round trip from the Lodge to a waterfall alcove you walk behind",
            "Skip the upper pools · confirm it's open at the Visitor Center",
            "If Reid's flagging, skip it and go straight to Riverside Walk",
          ],
          maps: "Lower Emerald Pool Trail, Zion National Park",
        },
        {
          start: "14:15",
          icon: "🏞️",
          title: "Riverside Walk + toe-dip in the Narrows",
          details: [
            "Shuttle to the last stop, Temple of Sinawava (stop 9)",
            "2.2 mi round trip, paved + flat — river on one side, 1,000-ft walls on the other",
            "At the end, wade a little way into the Narrows if flow is under ~150 cfs (posted at the Visitor Center)",
            "Water is ~50°F — ankle-deep in water shoes is plenty at 7",
            "Out-and-back on pavement: turn around anytime",
          ],
          maps: "Temple of Sinawava, Zion National Park",
        },
        {
          start: "16:30",
          icon: "🏊",
          title: "Shuttle out → pool + hot tub",
          details: ["The lodge is the first thing you hit walking out of the park"],
        },
        {
          start: "18:00",
          icon: "🍕",
          title: "Dinner — walk-in night",
          details: [
            "Oscar's Café (big portions, patio, kids' menu) or Zion Pizza & Noodle Co.",
            "Easy fallback right next door: Zion Canyon Brew Pub",
            "Sunset ~6:40 — the footbridge behind the lodge looks straight at the Watchman",
          ],
          maps: "Oscar's Cafe, 948 Zion Park Blvd, Springdale, UT",
        },
      ],
    },
    {
      date: "2026-10-24",
      label: "Sat, Oct 24",
      title: "River Trail by Bike, then the East Side + Cordwood",
      subtitle: "Cordwood is on the EAST side, so the east-side sights lead right into dinner — one trip through the tunnel.",
      events: [
        {
          start: "08:00",
          icon: "🥐",
          title: "Breakfast in the suite or Café Soleil",
          details: ["Café Soleil is a 2-min walk up Zion Park Blvd"],
          maps: "Cafe Soleil, Springdale, UT",
        },
        {
          start: "09:00",
          icon: "🚲",
          title: "Pa'rus Trail by bike + kid trailer",
          details: [
            "Rent 2 adult bikes + a Burley-style kid trailer at Zion Outfitter (next door to the lodge)",
            "Tow Reid 1.7 mi along the river to Canyon Junction and back — paved, nearly flat, best Watchman views in the park",
            "Prefer walking? Do the first mile to the first river bridge and turn around",
            "Mornings are cool — bring the fleeces",
          ],
          maps: "Zion Outfitter, 7 Zion Park Blvd, Springdale, UT",
        },
        {
          start: "11:15",
          icon: "🎖️",
          title: "Junior Ranger badge — Visitor Center",
          details: ["Turn in the booklet and get Reid sworn in"],
          maps: "Zion Canyon Visitor Center, Springdale, UT",
        },
        {
          start: "12:00",
          icon: "🌮",
          title: "Lunch in town",
          details: ["Whiptail Grill (in an old gas station — great fish tacos) or Zion Canyon Brew Pub next door"],
          maps: "Whiptail Grill, Springdale, UT",
        },
        {
          start: "13:00",
          icon: "🏊",
          title: "Pool / downtime / Springdale shops",
          details: ["Rest up — late dinner on the far side of the tunnel"],
        },
        {
          start: "15:45",
          icon: "🚇",
          title: "Jeep up the Zion–Mt. Carmel Highway",
          details: [
            "Switchbacks, then the 1.1-mile 1930 tunnel with its gallery windows",
            "~20 min from the lodge to the Canyon Overlook lot, just past the east end of the tunnel",
            "Bring layers for dinner — it gets cold fast after sunset",
          ],
          maps: "Canyon Overlook Trailhead, Zion National Park",
        },
        {
          start: "16:15",
          icon: "📸",
          title: "Canyon Overlook Trail",
          details: [
            "1 mi round trip, ~45 min with Reid · ends on a ledge over the whole canyon",
            "Some drop-offs aren't railed — hand-holding on the last stretch",
            "The lot is tiny: it fills in the morning but usually turns over by late afternoon. If it's full, skip it and keep going east.",
          ],
          maps: "Canyon Overlook Trailhead, Zion National Park",
        },
        {
          start: "17:15",
          icon: "🐏",
          title: "Checkerboard Mesa + slickrock pullouts",
          details: [
            "Let Reid scramble the low domes · watch for bighorn sheep (common here in fall)",
            "Exit the East Entrance — Zion Mountain Ranch is ~2.5 mi farther east on UT-9",
          ],
          maps: "Checkerboard Mesa, Zion National Park",
        },
        {
          start: "18:00",
          icon: "🍽️",
          title: "Dinner — Cordwood (RESERVED)",
          details: [
            "⚠️ At Zion Mountain Ranch, 9065 W UT-9, Mt. Carmel — EAST of the park, ~35–40 min from the lodge (NOT in Springdale)",
            "Farm-to-table, wood stove · the bison are the move (bison steak, bison rigatoni)",
            "Reid will love the herd of bison grazing right outside",
            "15-minute grace period — call if running late",
          ],
          maps: "Cordwood, 9065 W UT-9, Mt Carmel, UT 84755",
          reservation: {
            vendor: "Cordwood at Zion Mountain Ranch (OpenTable)",
            conf: "Conf # 3915 · Sat Oct 24, 6:00 PM · 3 guests",
            phone: "866-648-2555",
          },
        },
        {
          start: "19:30",
          icon: "🌙",
          title: "Drive back through the tunnel (~35 min)",
          details: [
            "Dark switchbacks — take it slow, watch for deer and sheep",
            "Pack tonight — tomorrow starts at 6:15 AM",
          ],
        },
      ],
    },
    {
      date: "2026-10-25",
      label: "Sun, Oct 25",
      title: "Fly Home",
      subtitle: "Early start in the dark — sunrise isn't until ~7:50.",
      events: [
        {
          start: "06:15",
          icon: "🌅",
          title: "Leave the lodge — 6:15 AM",
          details: [
            "Check out at the desk or drop keys (checkout is 11 AM, so nothing to rush)",
            "☕ Coffee stop: FeelLove Coffee (1101 Zion Park Blvd) opens at 6 AM and is right on the way out of town — 5 minutes, then go",
            "Breakfast at the airport or on landing",
            "~50 min to SGU · gas up in St. George near the airport",
          ],
        },
        {
          start: "07:00",
          icon: "🚙",
          title: "Return the Jeep — Enterprise SGU",
          details: [
            "Drop-off due 7:00 AM · extra hour is $32.40, so don't dawdle",
            "Return with a full tank · grab the booster seat",
          ],
          maps: "St. George Regional Airport, 4550 S Airport Pkwy, St George, UT",
          reservation: { vendor: "Enterprise", conf: "Conf 77332400", phone: "833-694-0147" },
        },
        {
          start: "08:15", end: "12:00",
          icon: "✈️",
          title: "Fly SGU → DFW",
          details: [
            "American Airlines 6356 · departs 8:15 AM Mountain, lands DFW 12:00 PM Central",
            "Seats 8A, 8B, 8C · St. George is tiny — at the airport by ~7:15 is plenty",
          ],
          reservation: {
            vendor: "American Airlines",
            conf: "Conf code is in the AA email (kept off this page on purpose)",
            phone: "800-433-7300",
          },
        },
      ],
    },
  ],

  explore: [
    {
      category: "Eat — reserved",
      items: [
        { name: "Cordwood", note: "BOOKED Sat 6 PM · Zion Mountain Ranch, east of the park · bison everything", maps: "Cordwood, 9065 W UT-9, Mt Carmel, UT 84755" },
      ],
    },
    {
      category: "Eat — walk-in friendly",
      items: [
        { name: "Oscar's Café", note: "Big portions, patio, kids' menu · friend-recommended", maps: "Oscar's Cafe, 948 Zion Park Blvd, Springdale, UT" },
        { name: "Zion Pizza & Noodle Co.", note: "In an old church · kid-easy", maps: "Zion Pizza & Noodle Co, Springdale, UT" },
        { name: "Zion Canyon Brew Pub", note: "Right next door to the lodge · river patio", maps: "Zion Canyon Brew Pub, Springdale, UT" },
        { name: "Whiptail Grill", note: "Fish tacos in an old gas station", maps: "Whiptail Grill, Springdale, UT" },
        { name: "Café Soleil", note: "Breakfast + sandwiches · 2-min walk", maps: "Cafe Soleil, Springdale, UT" },
        { name: "Bit & Spur", note: "Southwestern/Mexican · bit nicer · friend-recommended", maps: "Bit and Spur Restaurant, 1212 Zion Park Blvd, Springdale, UT" },
        { name: "Thai Sapa", note: "Asian · close to the lodge", maps: "Thai Sapa, Springdale, UT" },
        { name: "Castle Dome Café (Zion Lodge)", note: "Grab-and-go inside the park", maps: "Zion Lodge, Springdale, UT" },
        { name: "Red Rock Grill (Zion Lodge)", note: "Sit-down meal inside the park", maps: "Zion Lodge, Springdale, UT" },
      ],
    },
    {
      category: "Coffee, groceries & treats",
      items: [
        { name: "FeelLove Coffee", note: "Friend-recommended · opens 6 AM · on the way out Sunday", maps: "FeelLove Coffee, 1101 Zion Park Blvd, Springdale, UT" },
        { name: "Perks", note: "Coffee right at Zion Canyon Village", maps: "Perks Coffee, Springdale, UT" },
        { name: "Sol Foods", note: "Groceries + deli · trail snacks", maps: "Sol Foods Supermarket, Springdale, UT" },
        { name: "Lin's Market (Hurricane)", note: "Big grocery store on the drive in", maps: "Lin's Fresh Market, Hurricane, UT" },
        { name: "Springdale Candy Company", note: "Fudge + ice cream", maps: "Springdale Candy Company, Springdale, UT" },
      ],
    },
    {
      category: "Gear & shops",
      items: [
        { name: "Zion Outfitter", note: "Next door · bikes + kid trailers, Narrows socks/boots", maps: "Zion Outfitter, 7 Zion Park Blvd, Springdale, UT" },
        { name: "Zion Adventure Company", note: "Narrows gear rental + flow info", maps: "Zion Adventure Company, Springdale, UT" },
        { name: "Zion Park Store (Visitor Center)", note: "Junior Ranger, maps, souvenirs", maps: "Zion Canyon Visitor Center, Springdale, UT" },
      ],
    },
    {
      category: "Zion Canyon sights (shuttle)",
      items: [
        { name: "Court of the Patriarchs", note: "Shuttle stop 4 · 3 big cliffs, short walk", maps: "Court of the Patriarchs, Zion National Park" },
        { name: "Lower Emerald Pool", note: "From Zion Lodge · walk behind a waterfall", maps: "Lower Emerald Pool Trail, Zion National Park" },
        { name: "Big Bend", note: "Shuttle stop 8 · spot climbers on the walls", maps: "Big Bend, Zion National Park" },
        { name: "Riverside Walk → Narrows", note: "Stop 9 · paved, flat, ends at the river", maps: "Temple of Sinawava, Zion National Park" },
        { name: "Pa'rus Trail", note: "Paved river trail from the Visitor Center", maps: "Pa'rus Trail, Zion National Park" },
        { name: "Zion Human History Museum", note: "Stop 2 · short film + big view (check hours)", maps: "Zion Human History Museum" },
      ],
    },
    {
      category: "East side (Zion–Mt. Carmel Hwy)",
      items: [
        { name: "Zion–Mt. Carmel Tunnel", note: "1.1 mi, built 1930 · gallery windows", maps: "Zion-Mount Carmel Tunnel" },
        { name: "Canyon Overlook Trail", note: "1 mi RT · huge view for the effort", maps: "Canyon Overlook Trailhead, Zion National Park" },
        { name: "Checkerboard Mesa", note: "Cross-hatched slickrock · bighorn sheep", maps: "Checkerboard Mesa, Zion National Park" },
        { name: "Zion Mountain Ranch", note: "Cordwood + the bison herd", maps: "Zion Mountain Ranch, Mt Carmel, UT" },
      ],
    },
  ],

  maps: [
    { file: "maps/zion-map.jpg", title: "Zion — full park map", note: "Official NPS brochure map, both Zion Canyon + Kolob" },
    { file: "maps/zion-canyon-detail-map.jpg", title: "Zion Canyon detail", note: "Scenic Drive, trails, shuttle stops, east highway" },
    { file: "maps/zion-national-park-shuttle-map.jpg", title: "Shuttle stops", note: "Zion Canyon line (stops 1–9) + Springdale line" },
    { file: "maps/zion-pedestrian-map.jpg", title: "Lodge → Visitor Center", note: "The pedestrian entrance next to Cable Mountain Lodge" },
    { file: "maps/zion-emerald-pools-trail-map.jpg", title: "Emerald Pools trails", note: "Zion Lodge, horse corral, Lower Emerald Pool" },
  ],

  packing: [
    {
      group: "Layers (40s mornings, upper 60s afternoons)",
      items: [
        "Warm layer each — fleece or light puffy",
        "Light rain/wind shell",
        "T-shirts for warm afternoons",
        "LONG PANTS each — required-ish for the horse ride",
        "Warm hat for the Saturday-night drive + early Sunday",
        "Ball caps (big-brim hats must be tied on for the ride)",
        "Extra socks",
      ],
    },
    {
      group: "Feet & water",
      items: [
        "Closed-toe sneakers or hiking shoes — NO open toes on the horses",
        "Water shoes for the Narrows toe-dip (water is ~50°F)",
        "Dry socks + a small towel for after the river",
        "Swimsuits ×3 — lodge pool + hot tub",
      ],
    },
    {
      group: "Sun & trail (desert sun + dry air)",
      items: [
        "Sunscreen",
        "Sunglasses for all three",
        "Lip balm — it's very dry",
        "Small daypack (not allowed on the horse ride)",
        "Refillable water bottles ×3",
        "Binoculars — bighorn sheep on the east side",
        "Trail snacks (or buy at Lin's/Sol Foods)",
      ],
    },
    {
      group: "Documents & tech",
      items: [
        "Driver's licenses (REAL ID) — needed to fly",
        "America the Beautiful pass card — covers park entry",
        "Credit card in the driver's name (Enterprise deposit)",
        "Printed horse-ride parking permit (optional — only if you'd rather drive to the ride)",
        "Phone chargers + a car charger",
        "Battery pack",
        "Offline Google Maps of Springdale + the park",
        "NPS app — download Zion for offline",
        "Open this app once on wifi so it's cached",
      ],
    },
    {
      group: "For Reid",
      items: [
        "Booster seat — Utah requires one under 8 (check it on the plane free)",
        "Headphones + downloads for the flights and drives",
        "Favorite snacks",
        "Motion-sickness remedy for the tunnel switchbacks",
        "Junior Ranger booklet (free at the Visitor Center)",
      ],
    },
  ],

  info: [
    {
      title: "Reservations at a glance",
      items: [
        "✈️ AA 6357 out Thu 6:40 PM · AA 6356 home Sun 8:15 AM · seats 8A–C (conf code in AA email)",
        "🏨 Cable Mountain Lodge · Expedia itin # 73547715732650 · 435-772-3366 · free cancel until Oct 19, 3 PM",
        "🚙 Enterprise Jeep, SGU · conf 77332400 · Expedia itin # 73547717867894 · 833-694-0147 · pick up Thu 9 PM, return Sun 7 AM",
        "🐴 Canyon Trail Rides, Fri 11:00 AM (check in 10:30) · 3 riders · $187.20 due · 435-679-8665",
        "🍽️ Cordwood, Sat 6:00 PM · 3 guests · OpenTable conf # 3915 · 866-648-2555",
        "🏞️ Park pass · America the Beautiful, Recreation.gov order # 0896259208-1",
      ],
    },
    {
      title: "Still to do before the trip",
      items: [
        "📞 Zion Outfitter: hold 2 adult bikes + a kid trailer for Sat ~9 AM; confirm trailer weight limit",
        "📞 Canyon Trail Rides (435-679-8665): ask where you can leave a small daypack during the ride",
        "📞 Cable Mountain Lodge (435-772-3366): tell them you'll arrive after 10 PM Thursday",
        "🖨️ Optional: print the horse-ride parking permit (Peek email, Sep 25) — only needed if you drive to the corral instead of taking the shuttle. Gate code at Canyon Junction is 54143. The permit is collected after the ride and you must drive back out, so the shuttle plan is simpler.",
        "📱 Check in on the AA app Wed ~6:40 PM",
        "🌤️ Week of: shuttle hours (they shorten in late fall), Narrows flow, Lower Emerald Pool status — nps.gov/zion or 435-772-3256",
      ],
    },
    {
      title: "Drive times from the lodge",
      items: [
        "Visitor Center + shuttle — 5-min WALK",
        "Canyon Overlook (through the tunnel) — ~20 min",
        "Cordwood / Zion Mountain Ranch — ~35–40 min",
        "Hurricane (Lin's Market) — ~30 min",
        "St. George airport (SGU) — ~50 min",
      ],
    },
    {
      title: "The shuttle",
      items: [
        "Zion Canyon Scenic Drive is closed to private cars while the shuttle runs — the shuttle is the only way in (free, no reservation)",
        "Board at the Visitor Center (stop 1) · Zion Lodge is stop 5 · Temple of Sinawava (Riverside Walk) is stop 9",
        "Know the LAST shuttle time out of Temple of Sinawava — ask at the Visitor Center Friday morning",
        "The Zion–Mt. Carmel Highway (tunnel, east side) is open to cars any time",
      ],
    },
    {
      title: "Good to know",
      items: [
        "Time zone: Utah is Mountain Time — 1 hour behind Dallas",
        "Say it like a local: Hurricane is \"HURR-uh-kun\" (and Zion rhymes with lion)",
        "Elevation ~3,900 ft in Springdale (easy) but the air is VERY dry — drink more than you think",
        "Cell service: basically none past the Visitor Center — this app works offline",
        "Flash floods: the Narrows closes when flow is high or storms are forecast. Never enter if rangers say no.",
        "Don't feed the squirrels — they bite, and it's the #1 injury in the park",
        "Wildlife: mule deer everywhere, bighorn sheep on the east side, wild turkeys in the canyon",
        "Sun: rise ~7:50 AM, set ~6:40 PM",
        "Weather (typical late Oct): highs mid-60s to low 70s, lows ~40°F · forecast added the week of the trip",
      ],
    },
  ],
};
