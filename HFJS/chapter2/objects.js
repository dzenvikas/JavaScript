var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passangers: 2,
	convertible: false,
	milage: 1021
};

// another object
var caddi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passangers: 5,
	milage: 12892,
	started: false
};

// The dog object
var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};

var bark;
if(dog.age > 20){
	bark = "WOOF WOOF";
} else{
	bark ="woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
console.log(dog);









