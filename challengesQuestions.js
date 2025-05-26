// // Playing with Types
// // Task 1:

// // Write a function stringToNumber that takes a string input and tries to convert it to a number.
// //  If the conversion fails, return "Not a number".

// function stringToNumber(input) {
//     let num = Number(input)
//     if(num)return num
//     return `Not a number`
// }

// // Task 2:

// // Write a function flipBoolean that takes any input and converts it to its boolean equivalent, 
// // then flips it. For example, true becomes false, 0 becomes true, etc.
// function flipBoolean(input) {
//     input = !input
//     return input
// }



// // Task 3:

// // Write a function whatAmI that takes an input and returns a string describing its
// //  type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

// function whatAmI(input) {
//     if(typeof input === "number")return `I'm a number!`
//     else if(typeof input === "string")return `I'm a string!`
//     else return `..`
// }

// // Task 4:

// // // Write a function isItTruthy that takes an input and returns
// //  "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.


// function isItTruthy(input) {
//    if(input) return `It's truthy!`
//    else return `It's falsey!`
// }

// //variables types 
// // Playing with Variables
// // Task:

// // Perform the following mathematical operations
// // on the provided variables a and b



// // Add

// // Subtract

// // Multiply

// // Divide

// // Increment

// // Decrement

// // Reminder

// // **** DO NOT CHANGE the values *****
// const a = 18;
// const b = 24;

// // Addition of two values
// function add() {
//     return a + b;
// }

// // Subtract small value from larger one
// function subtract() {
//     return b - a;
// }

// // Multiply the values
// function multiply() {
//     return a * b;
// }

// // Divide larger value by smaller one
// function divide() {
//     return b / a;
// }

// // Increase value of a by 1 (without changing original a)
// function increment() {
//     return a + 1;
// }

// // Decrease value of b by 1 (without changing original b)
// function decrement() {
//     return b - 1;
// }

// // Divide larger value by smaller to find the remainder
// function reminder() {
//     return b % a;
// }




// ///Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:



// // Task 1: Array Filtering

// // Write a function filterNumbers(arr) that returns only numbers from a mixed array




// // Task 2: Array Reversal

// // Write a function reverseArray(arr) that reverses the array



// // Task 3: Find Maximum in an Array

// // Write a function findMax(arr) that returns the largest number in the array



// // Task 4: Remove Duplicates from an Array

// // Write a function removeDuplicates(arr) that returns a new array with all duplicates removed



// // Task 5: Flatten a Nested Array

// // Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

// //   
// // All changes saved



// // function filteredNumbers(arr) {
// //   return arr.filter(nums=> typeof nums=== "number");
// // }

// function reverseArray(arr) {

  
//   return arr.reverse();
// }

// function findMax(arr) {
//   return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
// }

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
  
// //   const unique = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (!unique.includes(arr[i])) {
// //       unique.push(arr[i]);
// //     }
// //   }
// //   return unique;
// }

// function flattenArray(arr) {
//   return arr.flat(Infinity);;
// }







