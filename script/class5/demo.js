// Iterate multiple nodes

let allAnchors = document.getElementsByTagName("a");
console.log(allAnchors);

for (let i =0; i < allAnchors.length; i++){
    allAnchors[i].setAttribute("target","_blank");
}

// let allAnchors = document.querySelectorAll("a");

// allAnchors.forEach(anchor => {
//     anchor.setAttribute("target", "_blank");
// });

// USE your console

/**
 * Replace an image with any other image
 * 
 * 1. Go to http://www.stephmoreau.ca
 * 2. Using the console, target the image under the text(think -> )
 */

let newImg = document.createElement("img");
newImg.src = "#";
newImg.alt = "image";
newImg.style.cssText = "border: 3px solid orange; max-height: 50px";
let bodyID = document.querySelector("body")[0];
newImg.appendChild(bodyID);