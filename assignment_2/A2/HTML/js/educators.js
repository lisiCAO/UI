/* 
Purpose: Reproduce the sample output as per design specifications. 
Method: Using jquery to fetch a json file and create the missing HTML elements.
Date: September 20, 2023
Author: Lisi Cao 【2387145】
*/

/* Imports jquery */
let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
script.onload = function () {
  fetchDataAndPopulate();
};

document.getElementsByTagName("head")[0].appendChild(script);

/* Principal function once loaded*/
function fetchDataAndPopulate() {
    $(document).ready(function() {

      // Using the fetch API to get the data
      fetch("js/educators.json")
      .then(response => response.json())
      .then(data => {
          populateSchoolInfo(data);
          populateEducators(data, data.educators);
      })
      .catch(error => {
          console.log("Fetch failed:", error);
      });

        /**
         * Output principal information of the school in header
         * @param {*} data 
         */
        function populateSchoolInfo(data) {
            $("header")
                .append($("<h1>").text(data.schoolName))
                .append(
                    $("<p>").text(
                        `Headmaster: ${data.headMaster} | Founded: ${data.schoolFounded}`
                    )
                );
        }

        /**
         * Display educators' contact information and courses in main
         * @param {*} data 
         * @param {*} educators 
         */
        function populateEducators(data, educators) {
            /* Sort educators by priority if needed */
            // educators.sort((a, b) => a.priority - b.priority);

            // Iterate over each educator and append to the main section
            $.each(educators, function(index, educator) {
                const section = $("<section>")
                    .append($("<h2>").text(educator.name))
                    .append($("<p>").text(`${data.schoolPhone} x${educator.extension}`))
                    .append($("<p>").text(`Office: ${educator.office}`))
                    .append($("<p>").text("Courses")) 
                    .append($("<ul>"));

                // Append each subject to the subjects ul
                $.each(educator.subjects, function(index, subject) {
                    section.find("ul").append($("<li>").text(subject));
                });

                $("main").append(section);
            });
        }
    });
}
