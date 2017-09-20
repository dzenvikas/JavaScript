// chevy object
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passangers: 2,
	convertible: false,
	milage: 1021,
	started: false,
	drive: function(){
		if(this.started){
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else{
			alert("You need to start the engine first.");
		}
	},
	start: function(){
		if(!this.started){
			this.started = true;
		}
	},
	stop: function(){
		if(this.started){
			this.started = false;
		}
	}
};

// caddi object
var caddi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passangers: 5,
	milage: 12892,
	started: false,
	drive: function(){
		if(this.started){
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else{
			alert("You need to start the engine first.");
		}
	},
	start: function(){
		if(!this.started){
			this.started = true;
		}
	},
	stop: function(){
		if(this.started){
			this.started = false;
		}
	}
};
// taxi object
var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passangers: 4,
	convertible: false,
	milage: 281341,
	started: false,
	drive: function(){
		if(this.started){
			alert(this.make + " " + this.model + " goes Zoom zoom!");
		} else{
			alert("You need to start the engine first.");
		}
	},
	start: function(){
		if(!this.started){
			this.started = true;
		}
	},
	stop: function(){
		if(this.started){
			this.started = false;
		}
	}
};


// function and object invoke
chevy.start();
chevy.drive();
chevy.stop();

caddi.start();
caddi.drive();
caddi.stop();

taxi.start();
taxi.drive();
taxi.stop();






















