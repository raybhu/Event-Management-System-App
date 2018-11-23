angular.module('app.services', [])


  .service('venueService', [function () {
    var venueData = [{
        "VenueID": "POD",
        "VenueName": "Podium, Level 6",
        "Latitude": 22.340778,
        "Longitude": 114.179943,
        "CampusID": "HSH"
      },
      {
        "VenueID": "SWT501",
        "VenueName": "Shaw Tower 501",
        "Latitude": 22.338867,
        "Longitude": 114.181909,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "LW",
        "VenueName": "Lam Woo Intl. Conf. Centre",
        "Latitude": 22.337639,
        "Longitude": 114.181986,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "LIP",
        "VenueName": "Li Promenade",
        "Latitude": 22.338376,
        "Longitude": 114.182043,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "OEE",
        "VenueName": "Oen Hall Building (East)",
        "Latitude": 22.340875,
        "Longitude": 114.180315,
        "CampusID": "HSH"
      },
      {
        "VenueID": "JSCY",
        "VenueName": "Courtyard, Student Residence Hall",
        "Latitude": 22.335191,
        "Longitude": 114.18233,
        "CampusID": "BURC"
      },
      {
        "VenueID": "MAINPO",
        "VenueName": "William M.W.Mong Courtyard",
        "Latitude": 22.340359,
        "Longitude": 114.179905,
        "CampusID": "HSH"
      },
      {
        "VenueID": "WLB",
        "VenueName": "Wing Lung Bank Bldg for Bus.",
        "Latitude": 22.33779,
        "Longitude": 114.18175,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "AST",
        "VenueName": "Sing Tao Building",
        "Latitude": 22.341284,
        "Longitude": 114.180171,
        "CampusID": "HSH"
      },
      {
        "VenueID": "AMP",
        "VenueName": "Amphitheatre, Level 3",
        "Latitude": 22.337959,
        "Longitude": 114.181919,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "SCT",
        "VenueName": "Cha Chi-ming Science Tower",
        "Latitude": 22.34064,
        "Longitude": 114.18012,
        "CampusID": "HSH"
      },
      {
        "VenueID": "SCE",
        "VenueName": "SCE Tower",
        "Latitude": 22.336109,
        "Longitude": 114.182735,
        "CampusID": "BURC"
      },
      {
        "VenueID": "WHSC",
        "VenueName": "Wai Hang Sports Centre",
        "Latitude": 22.339522,
        "Longitude": 114.181659,
        "CampusID": "HSH"
      },
      {
        "VenueID": "JSC",
        "VenueName": "Joint Sports Centre",
        "Latitude": 22.337776,
        "Longitude": 114.182298,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "CHAP",
        "VenueName": "University Chapel",
        "Latitude": 22.341138,
        "Longitude": 114.180205,
        "CampusID": "HSH"
      },
      {
        "VenueID": "SCM",
        "VenueName": "Jockey Club SCM Building",
        "Latitude": 22.335761,
        "Longitude": 114.18245,
        "CampusID": "BURC"
      },
      {
        "VenueID": "CVA",
        "VenueName": "Communication and Visual Arts Building",
        "Latitude": 22.33431,
        "Longitude": 114.182408,
        "CampusID": "BURC"
      },
      {
        "VenueID": "AC Hall",
        "VenueName": "Academic Community Hall",
        "Latitude": 22.341197,
        "Longitude": 114.179763,
        "CampusID": "HSH"
      },
      {
        "VenueID": "LMC",
        "VenueName": "Lui Ming Choi Centre",
        "Latitude": 22.341,
        "Longitude": 114.17974,
        "CampusID": "HSH"
      },
      {
        "VenueID": "FSC901E",
        "VenueName": "Fong Shu Chuen Library Room 901E",
        "Latitude": 22.340292,
        "Longitude": 114.180157,
        "CampusID": "HSH"
      },
      {
        "VenueID": "ACC",
        "VenueName": "Jockey Club Acad. Com. Centre",
        "Latitude": 22.336146,
        "Longitude": 114.182614,
        "CampusID": "BURC"
      },
      {
        "VenueID": "OEM",
        "VenueName": "Oen Hall Building (Main)",
        "Latitude": 22.34087,
        "Longitude": 114.180015,
        "CampusID": "HSH"
      },
      {
        "VenueID": "OEW",
        "VenueName": "Oen Hall Building (West)",
        "Latitude": 22.340817,
        "Longitude": 114.179599,
        "CampusID": "HSH"
      },
      {
        "VenueID": "RRS638",
        "VenueName": "Sir Run Run Shaw Building Room 638",
        "Latitude": 22.340252,
        "Longitude": 114.179615,
        "CampusID": "HSH"
      },
      {
        "VenueID": "DLB",
        "VenueName": "David C Lam Building",
        "Latitude": 22.337419,
        "Longitude": 114.181895,
        "CampusID": "SHAW"
      },
      {
        "VenueID": "AAB",
        "VenueName": "Academic and Administration Building",
        "Latitude": 22.33664,
        "Longitude": 114.1824,
        "CampusID": "BURC"
      }
    ];
    this.getVenue = function (venueId) {
      return venueData.filter(function (venue) {
        return venue.VenueID === venueId;
      })[0] || null;
    };
  }])

  .factory('BlankFactory', [function () {

  }])

  .service('BlankService', [function () {

  }]);
