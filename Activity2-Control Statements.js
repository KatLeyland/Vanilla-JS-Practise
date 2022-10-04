/* Write a JavaScript program that accepts three numbers from the user and prints "Increasing order" if the numbers are in the increasing order, 
"Decreasing order" if the numbers are in the decreasing order, and "Neither increasing or decreasing order" otherwise.

Test Data:

Input first number: 1524
Input second number: 2345
Input third number: 3321

Expected Output :

Increasing order. */

let first = prompt("enter first number");  //get first number
let second = prompt("enter second number");  //get second number
let third = prompt("enter third number");  //get third number

//Check for decreasing
if (first > second && second > third) {
	console.log("Decreasing order");
	}
//Check for increasing
else if (first < second && second < third) {
	console.log("Increasing order");
}
//Otherwise
else {
	console.log("Neither increasing or decreasing order")
}
