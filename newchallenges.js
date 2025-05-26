//Higher-Order Functions and Arrow Functions
//Task 1: Using Array Methods

// Write a function squareNumbers(arr) using map() and arrow functions
let arr=[1,2,3,4,5]
const squareNumbers = (arr)=>{
    return arr.map(num=> num**2)
}
let arr2 = squareNumbers(arr)
console.log(arr2)


// Task 2: Custom Filter Function

// Create a function filterEvenNumbers(arr) using filter() and arrow functions
let nums = [1, 2, 3, 4, 5, 6, 7,8,9]
const FilteredEvenNumbers = (nums)=>{
    return nums.filter(num => num%2==0)
}
let nums2 = FilteredEvenNumbers(nums)
console.log(nums2)

// Task 3: Sum of Positive Numbers

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

let numbers =[1,2,3,4,-2,-5,-7]
const n = (numbers)=>{
    return numbers.filter(num=>num>0).reduce((acc,curr)=>acc+curr)
}
console.log(n(numbers))

//Task 4: Transform Array of Objects

// Write a function getNames(arr) that takes an array of objects where each object has a 
// name property, and returns an array of just the names using map() and arrow functions
let obj =[
    {name:"John",age:25},
    {name:"Jane",age:30},
    {name:"Alice",age:35}
]
const getNames = (obj)=>{
    return obj.map(name => name.name)
    // return obj.map(age => age.age)
}
console.log(getNames(obj))

//Task 5: Find the Longest Word

// Write a function findLongestWord(arr) that takes an array of strings and returns the
//  longest word using reduce() and an arrow function
let words = ["apple", "banana", "cherry", "date", ]
const longestWord =(words)=>{
    return words.reduce((max,curr)=>max.length >= curr.length ? max : curr, "")
}
console.log(longestWord(words))