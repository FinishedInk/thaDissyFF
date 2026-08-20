export const leagueID = "1310420611469697024"; // your league ID
export const leagueName = "Tha Dissy"; // your league name
export const dues = 15; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

export const homepageText = `
  <p> Home Page of Tha Dissy</p>

`;

// To omit an optional field, set it's value to null

export const managers = [
  {
       "roster": 1, 
       "name": "Christopher",
       "tookOver": null,
       "location": "Yo Mama's House",
       "bio": "loading..",
       "photo": "/managers/chris.png", 
       "fantasyStart": 2024, 
       "favoriteTeam": "cin", 
       "mode": "Win Now", 
       "rival": {
         name: "Rival", 
         link: 6, 
         image: "/managers/rival.jpg",
       },
       "favoritePlayer": 830, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", 
       "rookieOrVets": "Rookies",
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "roster": 2,
    "name": "Sajoun",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "det",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    }
  },
  {
    "roster": 3,
    "name": "Cameron",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "jax",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Chaos",
    "tradingScale": 2,
    "preferredContact": "Text"
  },
  {
    "roster": 4,
    "name": "Hasahn",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "ne",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 167,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 2,
    "preferredContact": "Text"
  },
  {
    "roster": 5,
    "name": "Austin",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "cin",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 1,
    "preferredContact": "Text"
  },
  {
    "roster": 6,
    "name": "Jawaun",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "cin",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Text"
  },
  {
    "roster": 7,
    "name": "Colton",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "mia",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 6768,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 4,
    "preferredContact": "Carrier Pigeon"
  },
  {
    "roster": 8,
    "name": "Devon",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "cin",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 7564,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 4,
    "preferredContact": "Text"
  },

  {
    "roster": 9,
    "name": "Bryant",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "ten",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 9,
    "preferredContact": "Text"
  },
  {
    "roster": 10,
    "name": "Ben",
    "tookOver": null,
    "location": "Yo Mama's House",
    "bio": "loading..",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2024,
    "favoriteTeam": "cin",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 6,
      "image": "/managers/rival.jpg"
    },
    "favoritePlayer": 167,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Carrier Pigeon"
  }
  
]

  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
