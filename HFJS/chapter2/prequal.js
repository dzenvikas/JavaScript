// texi object
var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passangers: 4,
	convertible: false,
	milage: 281341
};

// fiat car object
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passangers: 2,
	convertible: false,
	milage: 88000
};

// cadillac car object
var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passangers: 5,
	convertible: false,
	milage: 12892
};

// function to check qualification of the car
function prequal(car) {
	if(car.milage > 10000){
		return false;
	} else if (car.year < 1960){
		return false;
	}
	return true;
}


var worthALook = prequal(taxi);
// console.log(worthALook);

if(worthALook) {
	console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else{
	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}


var worthALook = prequal(cadi);
// console.log(worthALook);

if(worthALook){
	console.log("You gotta check this out " + cadi.make + " " + cadi.model);
} else{
	console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}


var worthALook = prequal(fiat);
// console.log(worthALook);
if(worthALook){
	console.log("You gotta check this out " + fiat.make + " " + fiat.model);
} else{
	console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}
