let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
script.onload = function () {
    console.log("jQuery loaded successfully");
  fetchDataAndPopulate();
};

document.getElementsByTagName("head")[0].appendChild(script);

let educatorsData = 
  {
    "schoolName": "Imaginarium Prep",
    "schoolFounded": 1923,
    "schoolAddress": {
      "streetNumber": "31",
      "streetName": " Spooner",
      "city": "Fakerville",
      "state": "West Oklarado"
    },
    "schoolPhone" : "528-272-7478",
    "headMaster": "Jocelyn Weber",
    "headMasterOnSite": true,
    "isPrivate": true,
    "studentCount": 1330,
    "educators": [
      {
        "name": "Brittany Hansen",
        "office": "C29",
        "extension": 3451,
        "priority": 3,
        "subjects": [
          "Auctioneering",
          "Metalsmithing",
          "Bakery Science"
        ]
      },
      {
        "name": "Jori May",
        "office": "M87",
        "extension": 3489,
        "priority": 3,
        "subjects": [
          "Ecogastronomy",
          "Surf Science and Technology",
          "Metalsmithing"
        ]
      },
      {
        "name": "Thaxter Goodall",
        "office": "C02",
        "extension": 3401,
        "priority": 1,
        "subjects": [
          "Fermentation Sciences",
          "Auctioneering",
          "Viticulture and Enology"
        ]
      },
      {
        "name": "Robert Mccarthy",
        "office": "M82",
        "extension": 3457,
        "priority": 2,
        "subjects": [
          "Ecogastronomy",
          "Nautical Archaeology",
          "Astrobiology"
        ]
      },
      {
        "name": "Igor Glover",
        "office": "W88",
        "extension": 3434,
        "priority": 1,
        "subjects": [
          "Viticulture and Enology",
          "Metalsmithing",
          "Bagpiping"
        ]
      }
    ]
  }

function fetchDataAndPopulate() {
  $(document).ready(function () {
    console.log("Using inline data from educatorsData");
    populateSchoolInfo(educatorsData);
    populateEducators(educatorsData.educators);

    function populateSchoolInfo(data) {
      $("header")
        .append($("<h1>").text(data.schoolName))
        .append(
          $("<p>").text(
            `${data.schoolAddress.streetNumber} ${data.schoolAddress.streetName}, ${data.schoolAddress.city}, ${data.schoolAddress.state}. Phone: ${data.schoolPhone}`
          )
        )
        .append(
          $("<p>").text(
            `Headmaster: ${data.headMaster} ${
              data.headMasterOnSite ? "(On Site)" : "(Not On Site)"
            }`
          )
        );
    }

    function populateEducators(educators) {
      // Sort educators by priority
      educators.sort((a, b) => a.priority - b.priority);

      // Iterate over each educator and append to the main section
      $.each(educators, function (index, educator) {
        const section = $("<section>")
          .append($("<h2>").text(educator.name))
          .append(
            $("<p>").text(
              `Office: ${educator.office}, Extension: ${educator.extension}`
            )
          )
          .append($("<ul>"));

        // Append each subject to the subjects ul
        $.each(educator.subjects, function (index, subject) {
          section.find("ul").append($("<li>").text(subject));
        });

        $("main").append(section);
      });
    }
  });
}
