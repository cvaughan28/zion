# Zion Trip App

iPhone home-screen app (PWA) for the Vaughan family Zion trip, **October 22–25, 2026**.
Same setup as the Jackson Hole app: static site in `docs/`, served by GitHub Pages, installed via
Safari → Share → **Add to Home Screen**.

## What it does

| Tab | What's there |
|---|---|
| **Today** | Before the trip: countdown + Day 1 preview. During the trip: today's schedule with a "Now" and "Next" card. |
| **Plan** | The full day-by-day itinerary. Activities with bookings show a green reservation box (vendor, confirmation #, tap-to-call phone). |
| **Maps** | Five NPS maps (full park, Zion Canyon detail, shuttle stops, lodge → Visitor Center, Emerald Pools) stored **on the phone** — they open with zero cell signal. |
| **Explore** | Eat / coffee & groceries / gear / canyon sights / east-side sights, each with a Google Maps pin button. |
| **Info** | Reservations at a glance, still-to-do list, drive times, shuttle notes, good-to-know, and a per-phone packing checklist. |

## How offline works

The service worker (`docs/sw.js`) caches every file — including the ~4 MB of park maps — the
first time the app is opened. After that it loads entirely from the phone. **Google Maps links
still need signal.**

## Key assumptions

- Reservation details come from the confirmation emails (AA, Expedia hotel + car, Canyon Trail Rides
  via Peek, Cordwood via OpenTable). The day-by-day plan is adapted from the "Zion Long Weekend" plan.
- **Cordwood is at Zion Mountain Ranch, 9065 W UT-9, Mt. Carmel** — east of the park, ~35–40 min from
  the lodge — per the OpenTable confirmation. Saturday is rebuilt so the east-side sights (tunnel,
  Canyon Overlook, Checkerboard Mesa) lead straight into dinner, with the Pa'rus bike ride moved to the morning.
- Friday uses the park shuttle to the horse ride. The ride's parking permit is an alternative, but it's
  collected after the ride and you have to drive out, which breaks the rest of the canyon day.
- **"Now / Next"** uses the phone's clock — meaningful only on the trip, in Mountain Time.
- **Privacy:** the site URL is public, so the app uses first names only and leaves the airline
  confirmation code out. Hotel/car/restaurant confirmation numbers are included (same as Jackson Hole).

## Updating

1. Edit `docs/data.js` (all trip content is in this one file).
2. Bump `CACHE_VERSION` in `docs/sw.js` (e.g. `zion-v1` → `zion-v2`).
3. Commit and push — GitHub Pages redeploys automatically.

Map images are public-domain NPS maps via npmaps.com.
