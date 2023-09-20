$(document).ready(function(){
	// my DOM is loaded

	$("h2").css("color", "green");

	$("img").css("border", "2px solid orange");

	$(".homeLink").on("click", function(e){
		e.preventDefault();
		$(".homeLink").css("background", "lightblue");
		$(this).css("color", "white");
	});

	$("em").on("click", doSomething);

	function doSomething(e){
		e.preventDefault();
		$(this).css("border-bottom", "2px solid #772200");
	}

	$("nav a").on("mouseenter", function(){
		$(this).css("background", "pink").append("*");
	}).on("mouseleave", function(){
		$(this).css("background", "white");
	})

	$("img").on("click" ,function(){
		$(this).fadeOut(300);
	});

	$("input#btnSwapImage").on("click", function(){
		$("img").fadeToggle(2000, function(){
			$("em").css("color", "lime");
		});
	})

})


function loopParagraphs(){
// loop and change color of each paragraph

	// $("a").each(function(){
	// 	console.log( $(this).text("qwert<br>yuiop") );
	// });

	// $("em").each(function(){
	// 	console.log( $(this).html("qwert<br>yuiop") );
	// });

	$("p").each(function(){
		let randomColor = getRandomColor();
		console.log(randomColor);
		$(this).css("background-color", "#" + randomColor);
	})
}



/**​
 * Generate random hex color - not letters
 */
function getRandomColor() {
	let min = 0;
	let max = 999999;
  return (Math.floor(Math.random() *  (max - min + 1)) + min).toPrecision(6);
}