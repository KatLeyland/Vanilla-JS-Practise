/* Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, 
and display a message to the screen.

Expected Output:

"0 is even"
"1 is odd"
"2 is even" */

//iterate 1 to 15
for (let x = 1; x <= 15; ++x) {
	//check if even
	if (x % 2 == 0) {
		console.log(x + " is even");
	}
	//otherwise odd
	else {
		console.log(x + " is odd");
	}
}
