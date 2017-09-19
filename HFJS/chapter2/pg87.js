function whatShallIWear(temp){
	if(temp < 60){
		console.log("Wear a jacket");
	}else if(temp < 70){
		console.log("Wear a sweater");
		}else{
			console.log("Wear a t-shirt");
		}
}
whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

// ------------------------------------------

function bake(degrees){
	var message;

	if(degrees > 500){
		message = "I'm not a nuclear reactor!";
	}else if(degrees <100){
		message = "I'm not a refrigerator!";
	}else{
		message = "That's a very comfortable temperature for me.";
		setMode("bake");
		setTemp(degrees);
	}
	return message;
}
var status = bake(350);
console.log(status);