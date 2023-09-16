
function doImageSwap(){
	let d = new Date().getTime();
	document.getElementById("image1").src = "https://picsum.photos/120/120?random=1" + d;
	document.getElementById("image2").src = "https://picsum.photos/120/120?random=2" + d;
	document.getElementById("image3").src = "https://picsum.photos/120/120?random=3" + d;
	document.getElementById("image4").src = "https://picsum.photos/120/120?random=4" + d;
}

function mouseOverEvent(){
	console.log("mouse over!")
}

let htmlElem = document.getElementById("home");
htmlElem.addEventListener("mouseover", doImageSwap)


window.addEventListener("load", function(){
	//alert("the page has loaded");
	document.getElementById("txtFirstName").style.border = "2px solid red";
})

document.getElementById("txtFirstName").addEventListener("focus", function(){
	console.log( "focused" );
})

document.querySelector("form").addEventListener("submit", function(e){

	alert("Form submitted");
	e.preventDefault(); // stop the default action

	let firstName = document.getElementById("txtFirstName").value;
	
	console.log(firstName);

	document.getElementById("txtFirstName").value = ""

	let hairRadios = document.querySelectorAll("input[name=hairStyle]");
	
	for(let i = 0; i< hairRadios.length; i++ ){
		if ( hairRadios[i].checked ){
			console.log("checked hair is "+ hairRadios[i].value);
			break;
		}
	}

	// select

	let foodIndex = document.getElementById("selFood").selectedIndex;

	let foodSelected = document.getElementById("selFood").options[ foodIndex ].value
	
	console.log("Food: " + foodSelected);

});