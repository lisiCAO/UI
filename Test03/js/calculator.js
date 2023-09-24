/* TEST 3 - LISI CAO 2387145 */

//----- DO NO TOUCH BELOW ----//

// You are encouraged to use these variables but should not modify them
let billAmount, service, numPeople, billTip, billTotal, randomAPI;

/**
 * Any OUTPUT should be done using the this function
 * Setup is this way to ease testing of your - full required you using this function when required.
 * @param {string} str
 */
function output(str) {
  alert(str);
}

//----- DO NOT TOUCH ABOVE ----//

/**
 * Validate the input and clear it if it's not a positive float number
 * @param {object} inputElement
 * @returns {undefined}
 */
function validateAndClear(inputElement) {
  let inputValue = inputElement.val();
  // Use a regular expression to validate if it's a positive float number
  let regex = /^[+]?([0-9]*[.])?[0-9]+$/;
  if (!regex.test(inputValue)) {
    $("#imgSatisfaction").hide(); // Hide imgSatisfaction
    output("Please fill out all the fields");
    inputElement.val(""); // Clear the input
  }
}
$("#totalBill").on("change enter", function (e) {
  if (e.type === "enter") {
    e.preventDefault();
    validateAndClear($(this));
  }
  if (e.type === "change") {
    validateAndClear($(this));
  }
});

/**
 * Calculate the tip for a given meal
 */
function tipCalculator() {
  // 1. Retrieve the three values from the HTML form elements and store them into variables
  billAmount = parseFloat($("#totalBill").val());
  service = parseFloat($("#service").val());
  numPeople = parseInt($("#peopleCount").val());

  // 2. Validate that values "Bill Total" and "Service Satisfaction"
  if (isNaN(billAmount) || billAmount <= 0 || service <= 0 || isNaN(service)) {
    // 3. If validation fails for step 2
    $("#imgSatisfaction").hide(); // 3.1 Hide imgSatisfaction
    output("Please fill out all the fields"); // 3.2 Output the following "Please fill out all the fields"
    return; // 3.3 Do not do anything else
  }

  // 5. For the field "People in Party" if nothing, zero(0), or a negative value is entered
  if (isNaN(numPeople) || numPeople <= 0) {
    numPeople = 1; // 5.1 assume there is only 1 person in the party
    $("#peopleCount").val(numPeople); // 5.2 Update the HTML form element to reflect this value
  }

  // 6. Calculate the tip and save in variable billTip
  billTip = billAmount * service;

  // 7. Calculate the total amount of the bill and save in variable billTotal
  billTotal = billAmount + billTip;

  // 8. Erase any content in tipAndTotal
  $("#tipAndTotal").empty();

  // 9. Display the total tip per persons in a paragraph in tipAndTotal
  let tipPerPerson = (billTip / numPeople).toFixed(2); // Amounts should only display 2 decimal points
  $("#tipAndTotal").append(`<p>Tip/person: ${tipPerPerson}$</p>`); // 9.1 "Tip/person: 0.00$"

  // 10. Display the total amount per persons in a paragraph in tipAndTotal
  let totalPerPerson = (billTotal / numPeople).toFixed(2); // Amounts should only display 2 decimal points
  $("#tipAndTotal").append(`<p>Total/person: ${totalPerPerson}$</p>`); // 10.1 "Total/person: 0.00$"

  // 11. Make an AJAX request to the following Yes or No API
  $.get("https://yesno.wtf/api", function (data) {
    randomAPI = data;

    // 12. Using the response from the previous step
    // 12.1 Replace the source of imgSatisfaction to the image URL in the response
    $("#imgSatisfaction").attr("src", randomAPI.image).show(); // 12.1.1 Show the image

    switch (randomAPI.answer) {
      case "yes":
        output("Wow! Wow! Wow!"); // 12.2.1
        break;
      case "no":
        output("This was awful"); // 12.3.1
        break;
      case "maybe":
        output("Maybe we will return"); // 12.4.1
        break;
    }
  });
}
