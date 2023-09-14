/*
1. Store the users birth year in a variable.
2. Calculate and save their 2 possible ages based on the stored values.
3. Output to the console the user age
-- You're either X or Y --
*/


// let yearCurrent = new Date().getFullYear
// let yearBirth = new Date();
// yearBirth.setFullYear('1964');

// let age1 =  yearCurrent -  yearBirth;
// let age2 = yearCurrent -  yearBirth - 1;
function age(yearBirth){
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

let status =(age(yearBirth) > 18 ) ? "adult": "child";

console.log("your age is " + age + ".");

/**
 * Prompt users to provide you with a year of birth.
 *  if they fail to provide a year ignore their request and do nothing else.
 *  if they prodive anything other than a year that is less than or equal the current year, alert them wtih an error message and Prompt them again.
 *  if their input pass validation, alert the user with their possibe ages.
 */
/**
 * 
 * @returns alert
 */
function promptYearBirth(){
    let isDateGood = false;

    do{ 
    let yearBirth = prompt("What is your year of birth?");
    let currentYear = new Date().getFullYear();


    if(yearBirth === null || yearBirth.trim() === ""){
        return;
    }

    yearBirth = parseInt(yearBirth); // Convert the input to a number
    if(isNaN(yearBirth) || yearBirth > currentYear){
        alert("Date is not valid")
    }else{
        isDateGood = true;
        alert("Your possible ages are: " + (currentYear - yearBirth) + " or " + (currentYear - yearBirth - 1));
    }
    }while(!isDateGood);
}