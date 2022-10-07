/*
Activity 3 - Vanilla JS Arrays
Write a JavaScript program to find the maximum and minimum value of an array.

Test Data:

Sample Array:

[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:

Original Array: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Maximum value for the above array = 77

Minimum value for the above array = 14 */

let arr = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
console.log("Original array : " + arr);
let largestNumber = 0;
let smallestNumber = 99999999999999999;
for (let i = 0; i<arr.length; i++){
    if (arr[i] > largestNumber) {
        largestNumber=arr[i];
    }
    if (arr[i] < smallestNumber) {
        smallestNumber=arr[i];
    }
}
console.log("Maximum value for the above array = " + largestNumber);
console.log("Miniimum value for the above array = " + smallestNumber);