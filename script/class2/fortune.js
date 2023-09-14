/**
 * Turn the escript into a function 
 *  the last parameter should be Number of Kids
 *  Number of kids should have a default value of 0
 * 
 * Change the sentense structure depending on number of children
 *  if NUMBER OF KIDS is 0, do not mention them 
 *      ...and live in G with your dog D.
 *  if NUMBER OF KIDS is 1, kids is singular
 *      ... and live in G with your 1 kid and your dog D
 *  if NUMBER OF KIDS is greater then 1, kids is plural
 *      ...and live in G with your N kids and your dog D.
 *  if NUMBER OF KIDS is less than 0, do not mention them
 *      ...and live in G with your dog D.
 */

/**
 * 
 * @param {*} place 
 * @param {*} nameDog 
 * @param {*} numKids 
 * @returns 
 */
function furtune(place, nameDog, numKids = 0){
    if(numKids <= 0){
        return ("...and live in" + place + " with your dog" + nameDog + ".");
    } 
    else if (numKids == 1){
        return("...and live in" + place + " with your 1 kid and your dog " + nameDog + ".")
    }
    else if ( numKids > 1 ){
        return("...and live in" + place + " with your " +  numKids + " kid and your dog" + nameDog + ".")
    }
}

console.log(furtune("wuhan","caca"));