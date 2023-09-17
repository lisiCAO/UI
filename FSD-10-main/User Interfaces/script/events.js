/*
Add 3 radio buttons to your HTML page
Long hair
Short hair
Both
Once an item is selected create an image element and show the appropriate image according to their selection.
You cannot user innerHTML to complete this exersice
*/

// wiat for page to be loaded before manipulating the DOM elements
window.addEventListener("load", function(){
	let hairImg = document.createElement("img");
	hairImg.height = "200";
	hairImg.id = "hairImg";
	document.getElementById("demo").appendChild( hairImg );

	generateButtons("Long", "https://www.latest-hairstyles.com/wp-content/uploads/long-brown-hair-1.jpg");
generateButtons("Short", "https://content.latest-hairstyles.com/wp-content/uploads/short-textured-and-layered-inverted-bob.jpg");
generateButtons("Both", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Modern_Mullet.jpg/1200px-Modern_Mullet.jpg")
});



function generateButtons(hairStyle, newImg){
	let btn = document.createElement("input");
	btn.type = "radio";
	btn.value = hairStyle;
	btn.name = "hairStyles";
	btn.addEventListener("click", function(){
		document.getElementById("hairImg").src = newImg;
	})
	document.getElementById("demo").appendChild( btn );

	let span = document.createElement("span");
	span.appendChild( document.createTextNode( hairStyle ) );
	document.getElementById("demo").appendChild( span );

}
