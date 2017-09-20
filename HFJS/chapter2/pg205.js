var eightBall = {
	index: 0,
	advice: ["yes", "no", "maybe", "not a chance"],
	shake: function(){
		console.log(eightBall.index);
		this.index = this.index + 1;
		if(this.index >= this.advice.length){
			this.index = 0;
		}
	},
	look: function(){
		return this.advice[this.index];
	}
};
for(var i = 0; i < eightBall.advice.length; i++){
	eightBall.shake();
	console.log(eightBall.look());
}
