
// Accessing element via the DOM
document.getElementById("home"); // HTML NODE <a href=​"#" id=​"home" class=​"homeLink">​Duis eu​</a>​

let homeElement = document.getElementById("home");
homeElement; // HTML NODE<a href=​"#" id=​"home" class=​"homeLink">​Duis eu​</a>​
homeElement.href; // 'http://127.0.0.1:5500/template.html#'
homeElement.id; // 'home'
homeElement.href = "#home";
homeElement; // HTML NODE <a href=​"#home" id=​"home" class=​"homeLink">​Duis eu​</a>​
homeElement.target = "_blank";

document.getElementById("image1").src="https://www.w3schools.com/images/colorpicker.png";

document.getElementById("image2"); // HTML NODE <img src=​"https:​/​/​picsum.photos/​id/​234/​120/​120" alt id=​"image2">​
document.getElementById("image23"); //	null

// first HTML NODE that matches the css style query​
document.querySelector("a");
document.querySelector("p em");

// returns collection of HTML nodes
document.getElementsByTagName("em")
document.getElementsByTagName("a")

let homeId = document.getElementById("home");

// Iterate multiple nodes
let allAnchors = document.getElementsByTagName("a");

// for (let i in allAnchors){ --> will not execute properly as the returned value is a collection (not an array)
for (let i = 0; i < allAnchors.length; i++){
	let currentAnchor = allAnchors[i];

	currentAnchor.href="http://www.google.ca";
	currentAnchor.target = "_blank";
}
// console.log(allAnchors);


// Manipulate the style of our elements
let elem = document.getElementById("home");
elem.style.color = "hotpink";
elem.style.color = "#77ee01";
elem.style.fontWeight = "900";
elem.style.display = "none";
elem.style.display = "inline";
elem.style.display = "block";


// retrieve the HTML content of the element
document.getElementsByTagName("body")[0].innerHTML = "Hello World"
document.getElementsByTagName("body")[0].innerHTML = "<h2>Hello World<h2>"
document.getElementsByTagName("body")[0].innerHTML = "<h2>Hello World</h2>"
document.getElementsByTagName("body")[0].innerHTML = "<h2 id=home>Hello World</h2>"
document.getElementById("home");	// HTML NODE <h2 id=​"home">​Hello World​</h2>​

document.getElementById("home").innerHTML;	//	Hello World
document.getElementById("home").innerHTML = "Hello <em>World</em>"
document.getElementById("home").innerText;	//	Hello World
document.getElementById("home").innerText = "Hello <em>World</em>"
document.getElementById("home").innerText;	//	Hello <em>World</em> -- shows ALL the html tags


// create DOM elements
let newImg = document.createElement("img");
newImg.alt = "sample image";
newImg.src = "http://stephmoreau.ca/coming/profile.png";
newImg.style.cssText = "border: 3px solid orange; max-height: 50px;";

document.getElementById("nav").appendChild( newImg );

// RECOMMENDED:  DOM API to cerate html elements. 
let newParagraph = document.createElement("p");
newParagraph.id = "menuItemLast";
let newText = document.createTextNode("Howdy");
newParagraph.appendChild(newText);
// newParagraph.appendChild( document.createTextNode("Howdy"); ); // same as above
document.getElementById("nav").appendChild( newParagraph );

/* 
Using innerHTML and innerText is one way of creating elements, it uses the element methods to do so. 
It is recommendede to use the DOM api to manipulate DOM nodes when creating items
*/



console.log(newImg);