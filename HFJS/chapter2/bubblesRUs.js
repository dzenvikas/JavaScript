var scores = [60, 50, 60, 58, 54, 54,
			  58, 50, 53, 54, 48, 69,
			  34, 55, 51, 52, 44, 51,
			  69, 64, 66, 55, 52, 61,
			  46, 31, 57, 52, 44, 18,
			  41, 53, 55, 61, 51, 44];


// print like 'Bubbles solution #0 score: 60'
var output;
i = 0;
while (i < scores.length) {
	output = ("Bubbles solution #" + i + " score: " + scores[i]);
	console.log(output);
	i += 1;
};

// total no. of bubble tests
console.log("Bubbles tests:" + scores.length);

// highest bubbleSolution score

// solutions with highest score