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

function prequal(car) {
	if(car.milage > 10000){
		return false;
	} else if (car.year < 1960){
		return false;
	}
	return true;
}


var worthALook = prequal(taxi);

if(worthALook) {
	console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else{
	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}