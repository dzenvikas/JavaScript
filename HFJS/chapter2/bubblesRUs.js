var scores = [60, 50, 60, 58, 54, 54,
			  58, 50, 53, 54, 48, 69,
			  34, 55, 51, 52, 44, 51,
			  69, 64, 66, 55, 52, 61,
			  46, 31, 57, 52, 44, 18,
			  41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
			 .33, .31, .25, .29, .27, .22,
			 .31, .25, .25, .33, .21, .25,
			 .25, .25, .28, .25, .24, .22,
			 .20, .25, .30, .25, .24, .25,
			 .25, .25, .27, .25, .26, .29];

// // print like 'Bubbles solution #0 score: 60'
// // var output;
// // i = 0;
// // while (i < scores.length) {
// // 	output = ("Bubbles solution #" + i + " score: " + scores[i]);
// // 	console.log(output);
// // 	i += 1;
// // }

// // using for loop instead of while loop
// for (var i = 0; i < scores.length; i++){
// 	output = "Bubbles solution #" + i + " score: " + scores[i];
// 	console.log(output);
// }

// // total no. of bubble tests
// console.log("Bubbles tests:" + scores.length);

// // highest bubbleSolution score
// var highestScore = 0;
// for(var i = 0; i < scores.length; i++){
// 	if( highestScore < scores[i]){
// 		highestScore = scores[i];
// 	}
// }
// console.log("Highest bubble score: " + highestScore);

// // solutions with highest score
// var bestSolutions = [];
// for(var i = 0; i < scores.length; i++){
// 	if(scores[i] == highestScore){
// 		bestSolutions.push(i);
// 	}
// }
// console.log("Solutions with the highest score: " + bestSolutions);


// *********************<< WE ARE NOW USING FUNCTIONS >>*********************


// prints scores and high score
function printAndGetHighScore(scores){
	var highestScore = 0;
	var output;
	// prints scores
	for( var i = 0; i < scores.length; i++){
		output = "Bubbles solution #" + i + " score: " + scores[i];
		console.log(output);
		// get high score
		if(highestScore < scores[i]){
			highestScore = scores[i];
		}
	}
	return highestScore;
}
// function invoke
var highestScore = printAndGetHighScore(scores);

// returns numbers of highest scoring bubble solutions
function getHighestScoreSolutions(scores, highestScore){
	var highestScoreSolutions = [];
	for(var i = 0; i < scores.length; i++){
		if(highestScore == scores[i]){
			highestScoreSolutions.push(i);
		}
	}
	return  highestScoreSolutions;
}

// function invoke
var highestScoreSolutions = getHighestScoreSolutions(scores, highestScore);

// best solution
function mostCostEffectiveSolution(highestScoreSolutions, costs){
	var bestSolution = 100;
	var index;
	for(var i = 0; i < highestScoreSolutions.length; i++){
		if(costs[highestScoreSolutions[i]] < bestSolution){
			bestSolution = costs[highestScoreSolutions[i]];
			index = highestScoreSolutions[i];
		}
	}
	return index;
}
// function invoke
var bestSolution = mostCostEffectiveSolution(highestScoreSolutions, costs);


// printing in console
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highestScore);

console.log("Highest score solutions: " + highestScoreSolutions);

console.log("Bubble solution #: " + bestSolution + " is the most cost effective");

console.log(highestScoreSolutions);

console.log("THE LAST INPUT: " + scores[scores.length-1]);






