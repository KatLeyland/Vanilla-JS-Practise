/* Write a JavaScript program to create the multiplication table (from 1 to 10) of a number.

Expected Output:

Input a number: 6

6 x 1 = 6 

6 x 2 = 12 

6 x 3 = 18 

6 x 4 = 24 

6 x 5 = 30 

6 x 6 = 36 

6 x 7 = 42 

6 x 8 = 48 

6 x 9 = 54 

6 x 10 = 60 */

//get input for which table
multiplicand =prompt("input a number")
//iterate to 10
for (let x=1; x <= 10; ++x) {
	//multiply
	(product = multiplicand * x);
	//display
	console.log(multiplicand + "x" + x + "=" + product);
}

	
