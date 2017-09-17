var products = ["Choo Choo Chocolate", "Icy Mint", 
				"Cake Batter", "Bubblegum"];

var hasBubbleGum = [false, false, false, true];

// var i = 0;
// while(i < hasBubbleGum.length){
// 	if(hasBubbleGum[i]){
// 		console.log(products[i] + " contains bubble gum");
// 	}
// 	i += 1;
// }

// using for loop instead of while loop
// also using post-incrementation
for(var i = 0; i < hasBubbleGum.length; i++){
	if(hasBubbleGum[i]){
		console.log(products[i] + " contains bubble gum");
	}
}