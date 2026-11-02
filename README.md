# Elysée Shuttle

Mobile-first timetable for the private shuttle between Hôtel l'Elysée Val d'Europe and Disneyland Paris (Chessy Gares Sud, bus stop F).

- Near the hotel → shows departures **to Disney**; in the park → departures **to the hotel** (uses your phone's location, falls back to a manual toggle).
- Big "next shuttle" with countdown, the following departures, and today's full list.
- Picks high/low season per day, handles after-midnight buses, works offline once opened ("Add to Home Screen").

## Host on GitHub Pages
1. Create a repo (e.g. `elysee-shuttle`) and upload all files in this folder.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. Open `https://<your-user>.github.io/elysee-shuttle/` on your phone. Location needs HTTPS, which Pages provides.

## Updating to a new PDF
Only edit `schedule.js`:
- `timetables` — copy the low/high season times.
- `highSeasonDates` — the yellow days of the new calendar (single dates or `from/to` ranges).
- `calendarCovers` — first and last date the new calendar shows.
- `source` — a short note about which PDF this is.
Commit, and the site updates within a minute or two.
