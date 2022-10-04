/* Write a JavaScript program that accepts three numbers and prints "All numbers are equal" if all three numbers are equal, "All numbers are different" 
if all three numbers are different and "Neither all are equal or different" otherwise.

Test Data:

Input first number: 2
Input second number: 3
Input third number: 4

Expected Output :

All numbers are different.*/

let first = prompt("enter first number");  //get first number
let second = prompt("enter second number");  //get second number
let third = prompt("enter third number");  //get third number

//check if all equal
if (first == second && second == third) {
	console.log("All numbers are equal");
	}
//check if all different
else if (first != second & second != third) {
	console.log("All numbers are different");
	}
//otherwise 
else {
	console.log("Neither all are equal or different");
	}