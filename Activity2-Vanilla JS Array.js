/*
Activity 2 - Vanilla JS Arrays
Write a JavaScript program to calculate the average value of an array elements.

Test Data:

Sample Array:

[20, 30, 25, 35, -16, 60, -100]

Expected Output:

Average value of the array elements is : 7.7.

Important:
Don't forget to comment your code.*/

let arr = [20, 30, 25, 35, -16, 60, -100]; //set value of array (cant be const bacause changes later)
let sum = 0; //set value of sum
for (let i = 0; i<arr.length; i++){ //iterate through each
	sum += arr[i] //find total
}
avg = sum / arr.length; //find average
console.log("Average value of the array elements is : " + avg); //output