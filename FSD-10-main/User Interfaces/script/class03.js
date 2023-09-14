let i = 0;
i = "string now!!";
i = [1,2,3];
console.log(typeof i); // typeof = object

let multi = [ 
	["apple", "apricot"],
	["banana", "bread"],
	["cherries", "cranberries", "chipss"]
];

let playerCards = [
	["3h","5s"],
	["9d", "10s", "3s"]
]
player1Cards = ["3h","5s"];
player2Cards = ["9d", "10s", "3s"];

let confusing = ["apple", 5.99, "banana", "cherries", [5,5,"dice", [1,2,3]]];

let item;
let dogs = ["husky", "poodle"];
//console.log(dogs.indexOf("husky",0));
//console.log(dogs.indexOf("husky",2));

console.log(dogs);
dogs.unshift("pug"); // add at the start
console.log(dogs);
dogs.unshift("labrador", "Pincher");	// add multiple values
console.log(dogs);

item = dogs.shift(); // removed from start, removed value returned
console.log(dogs);
console.log("item removed: " + item)
dogs.shift(); // removed from start, removed value ignored
console.log(dogs);

dogs.push("Jack Russel"); // add at the end
console.log(dogs);
dogs.push("Rottweiller", "Chihuahua"); // add multiple values at end
console.log(dogs);

dogs.pop();
console.log(dogs);
item = dogs.pop();
console.log(dogs);
console.log("popped item: " + item);


dogs[dogs.length] = "Collie"; // not recommeded
console.log(dogs);
dogs[10] = "Terrier"; // not recommended - creates empty values
console.log(dogs);


// SPLICE

let foods = ["apple", "apricot", "banana", "bread", "cherries", "cranberries", "chips"];
console.log(foods);

// start before index 4, remove 2 items
foods.splice(4,2);
console.log(foods);

// start before index 4, remove 2 items
item = foods.splice(4,2);
console.log(foods);
console.log(item); // array of removed items (if any)

// start before index 2, add 3 new items
foods.splice(2, 0, "Pizza", "Pepperoni", "Pasta");
console.log(foods);

// start before index 0, remove 4 items, add 2 new items
item = foods.splice(0, 4, "hot-dog", "hamburger");
console.log(foods);
console.log("removed item: " + item); // item is array, shows as string because of concatenation


// COMBINE MULTIPLE ARRAYS/STRINGS
let dogs = ["pug", "poodle"];
let cats = ["tabby", "black"];
let farm = ["cow", "pig", "horse"];

let animals = dogs.concat(cats);	// ["pug", "poodle", "tabby", "black"]
animals = dogs.concat(cats, "hamster"); // ["pug", "poodle", "tabby", "black", "hamster"]
animals = dogs.concat(farm, cats, "hamster"); // ["cow", "pig", "horse", "pug", "poodle", "tabby", "black", "hamster"]

// TRANSFORM ARRAY INTO STRING
dogs.join(" or ");// 'pug or poodle'
farm.join("0");		// 'cow0pig0horse'
farm.join(", ");	// 'cow, pig, horse'

// TRANSFORM STRING INTO ARRAY
let newArrayString = "hockey,soccer,rugby,baseball,basketball";
newArrayString	//	'hockey,soccer,rugby,baseball,basketball'
newArrayString.split(",") //	(5) ['hockey', 'soccer', 'rugby', 'baseball', 'basketball']
newArrayString.split(",",3);	// (3) ['hockey', 'soccer', 'rugby']

/* OBJECTS */

let objBox = {
	length: 10,
	width: "20px",
	depth: 30 
}

let teacher = {
	name: "Stephanie Moreau",
	eyeColor: "brown",
	likes: ["ninja", "orange", "cats"],
	birthday: {month: 12, day: 13},
	saySomething: function(){
		console.log("Hello");
	},
	greetings :function(){
		console.log("Hello " + this.name);
		console.log("bye");
	},
	outsideGreeting: greetTeacher
}
let teacher2 = {
	name: "John Jones",
	greetings: function(){
		console.log("Hello " + this.name);
	},
	outsideGreeting: greetTeacher
}

function greetTeacher(){
	console.log("Howdy " + this.name);
}


teacher.name; //	'Stephanie Moreau'
teacher.birthday	//	{month: 12, day: 13}
teacher.birthday.day	//	13
teacher.likes	//	(3) ['ninja', 'orange', 'cats']
teacher.likes[0]	//	'ninja'

teacher.hometown = "Montreal"; // creates new property
teacher.name = "Steph Moreau"; // change value
delete teacher.eyeColor;	// remove property

teacher2.outsideGreeting();	// 	Howdy John Jones
teacher.outsideGreeting();	//	Howdy Stephanie Moreau 


// create reusable object
function Planet (Aname, AdistanceFromSun, Acircumference){
	this.name = Aname;
	this.distanceFromSun = AdistanceFromSun;
	this.circumference = Acircumference;
	this.displayDetails = function(){
		console.log(this.name + " is " + this.distanceFromSun + "km from the sun");
	}

}

let Mercury = new Planet ("Mercury", 159, 245);
let Venus = new Planet ("Venus",  245, 152);