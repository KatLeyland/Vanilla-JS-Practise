/* 
Write a JavaScript program to sum values of an array.

Test Data:

Sample Array:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Expected Output:

The sum is 55.

Important:
Don't forget to comment your code.

*/


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // initialise array (tried to do const, didnt work, look into that further!
let sum = 0; //initialise sum
for (let i = 0; i < 10; i++) { //cycle through each number in array
sum += array[i] //add them up
}
console.log("The sum is " + sum); //output
