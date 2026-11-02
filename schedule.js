/*
 * Shuttle schedule data — the ONLY file you need to edit when the hotel
 * publishes a new PDF. Times are local Paris time, "HH:MM".
 * Times after midnight (e.g. "00:26") are treated as part of the previous
 * evening's service, so keep them at the end of the list.
 */
window.SHUTTLE = {
  // Shown in the footer so you know which PDF the data came from
  source: "Navette privée PDF — valid from 01/01/2026, calendar Oct–Nov 2026",
  pdfPage: "https://www.hotelelysee.com/activity/disneyland-paris/",

  // Dates the PDF calendar covers. Outside this range the site falls back to
  // `defaultSeason` and shows a "timetable may be outdated" notice.
  calendarCovers: { from: "2026-09-01", to: "2026-11-30" },
  defaultSeason: "low",

  // Yellow days in the PDF calendar. Single dates or ranges "YYYY-MM-DD/YYYY-MM-DD".
  highSeasonDates: [
    "2026-09-05", "2026-09-12", "2026-09-19", "2026-09-26",
    "2026-10-03", "2026-10-10",
    "2026-10-15/2026-11-01",
    "2026-11-07", "2026-11-14", "2026-11-21", "2026-11-28"
  ],

  // Days without any shuttle (none listed in this PDF)
  noServiceDates: [],

  journeyMinutes: 10,

  timetables: {
    low: {
      toPark:  ["08:30","08:55","09:15","09:35","10:00","10:20","10:50","11:10","11:30",
                "17:30","17:58","18:30","18:58","20:30","20:58","21:28"],
      toHotel: ["08:43","09:47","10:35","11:45",
                "17:45","18:15","18:45","20:15","20:45","21:15","21:45","22:15","22:45"]
    },
    high: {
      toPark:  ["08:30","08:55","09:15","09:35","10:00","10:20","10:50","11:10","11:30",
                "17:30","17:58","18:30","18:58","19:30","19:58","20:30","21:57","22:23"],
      toHotel: ["08:43","09:47","10:35","11:45",
                "17:45","18:15","18:45","19:15","19:45","20:15",
                "21:43","22:10","22:36","23:03","23:20","23:36","23:52","00:09","00:26","00:42"]
    }
  },

  // Where you are (for auto-detect) and where you board
  places: {
    hotel: {
      name: "Hôtel l'Elysée Val d'Europe",
      boardAt: "Shuttle stop at the hotel",
      hint: "7 Cours du Danube, Serris — ask reception if unsure where it stops.",
      lat: 48.85559, lng: 2.77573,
      zone: [[48.85559, 2.77573]]
    },
    park: {
      name: "Disneyland Paris",
      boardAt: "Bus stop F · Chessy Gares Sud",
      hint: "South bus station, past Disney Village and the Indigo parking. Look for “Navette privée — L'Elysée / Adagio / Hipark”.",
      lat: 48.8675, lng: 2.78386,
      // Points that count as "in the park": bus station, Disneyland Park, Studios, Village
      zone: [[48.8675, 2.78386], [48.8722, 2.7758], [48.8681, 2.7799], [48.8696, 2.7832]]
    }
  }
};
