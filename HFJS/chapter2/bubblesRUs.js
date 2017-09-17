var scores = [60, 50, 60, 58, 54, 54,
			  58, 50, 53, 54, 48, 69,
			  34, 55, 51, 52, 44, 51,
			  69, 64, 66, 55, 52, 61,
			  46, 31, 57, 52, 44, 18,
			  41, 53, 55, 61, 51, 44];


// print like 'Bubbles solution #0 score: 60'
// var output;
// i = 0;
// while (i < scores.length) {
// 	output = ("Bubbles solution #" + i + " score: " + scores[i]);
// 	console.log(output);
// 	i += 1;
// }

// using for loop instead of while loop
for (var i = 0; i < scores.length; i++){
	output = "Bubbles solution #" + i + " score: " + scores[i];
	console.log(output);
}

// total no. of bubble tests
console.log("Bubbles tests:" + scores.length);

// highest bubbleSolution score
var highestScore = 0;
for(var i = 0; i < scores.length; i++){
	if( highestScore < scores[i]){
		highestScore = scores[i];
	}
}
console.log("Highest bubble score: " + highestScore);
// solutions with highest score