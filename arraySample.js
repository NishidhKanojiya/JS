let teaFlavors1 = ["green tea", "black tea", "oolang tea"]
// console.log(teaFlavors1.length)



let teaFlavors = ["green tea", "black tea", "oolang tea"]
// let teaFlavors1 = new Array ("greeen tea","black tea", "oolang tea")
let firstTea = teaFlavors[0]
// console.log(firstTea)


let cities = ["tokyo", "mumbai", "paris", "NY"]
let favoriteCity = cities[2]
// console.log(favoriteCity)

let teaTypes = ["herbal tea", "white tea ", "masala tea"]
teaTypes[1] = "jasmime tea"
// console.log(teaTypes)


let citiesVisited = ["mumbai", "sydney"]
citiesVisited.push("Berlin")//PUSH method arrayname.push(element1,element2,.......,n)
// console.log(citiesVisited)

let teaOrders = ["chai", "coffee", "kawa", "matcha"]
let lastOrder = teaOrders.pop() // remove the last element from the array 
// console.log(lastOrder)
// console.log(teaOrders)

let popularTeas = ["greentea", "oolang tea", "chai"]
let softCopy = popularTeas//this is called softcopy 
popularTeas.pop()
// console.log(softCopy)
// console.log(popularTeas)//it changes both the array but with the primitive data type it does not do it because of the heap memory and the stack memory 
// in softcopy any changes in the main array affects the copied array 
//for example 
let a = 8
let b = a
a = 5
// console.log(a)
// console.log(b)

//hardcopy of an array  directly make a copy of the memory
let topcities = ["mumbai", "pune", "kolkata"]
let hardCopyCities = [...topcities]
// let hardCopyCities = topcities.slice()
topcities.pop()
// console.log(hardCopyCities)
// console.log(topcities)

//merge two arrays
let europeanCities = ["paris", "london"]
let asianCities = ["nashik", "pune"]

// let mergedCities = europeanCities + asianCities // return a string 
// let mergedCities = [europeanCities ,asianCities] // return arrays inside an array
let mergedCities = europeanCities.concat(asianCities) //return a new array with all elements
// let mergedCities = [...asianCities,...europeanCities]
// console.log(mergedCities)


//splice the array - splice() - array.splice(startIndex, deleteCount, item1, item2, ...);
//remove items
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // remove 2 elements from index 1
// console.log(arr); // [1, 4, 5]


//add items 
let arr1 = [1, 4, 5];
arr.splice(1, 0, 2, 3); // at index 1, delete 0 items, add 2, 3
// console.log(arr1); // [1, 2, 3, 4, 5]

//replace items 
let colors = ["red", "blue", "green"];
// colors[1]="yellow"
colors.splice(1, 1, "yellow"); // replaces "blue" with "yellow"
// console.log(colors); // ["red", "yellow", "green"]

//SLICE array
//array.slice(startIndex , endIndex)
let fruits = ["apple", "banana", "mango", "orange"];
let tropical = fruits.slice(1, 3);
// console.log(tropical); // ["banana", "mango"]

let lastTwo = fruits.slice(2);
// console.log(lastTwo); // ["mango", "orange"]

let result = fruits.slice(-3);
// console.log(result); // ["mango", "orange"]

//indexOf in array
//array.indexOf(searchElement,fromIndex) returns the first occurence from the index provided 
//if not found returns -1

let colors1 = ["red", "blue", "green", "blue"];
let index = colors1.indexOf("blue");

// console.log(index); // 1 (first occurrence)

let animals = ["cat", "dog", "rabbit"];
// console.log(animals.indexOf("tiger")); // -1

let nums = [1, 2, 3, 2, 4];
// console.log(nums.indexOf(2));      // 1
// console.log(nums.indexOf(2, 2));   // 3 (starts from index 2)

let words = ["Hello", "world"];
// console.log(words.indexOf("hello")); // -1 (case-sensitive)

//usecase Example
let cart = ["milk", "eggs", "bread"];

if (cart.indexOf("eggs") == -1) {
  //   console.log("Eggs are already in the cart");
} else {
  cart.push("eggs");
}



//join in array js  array.join(separator) --separator is optional . default is comma (,)
//join() is for arrays, not objects.

// If elements are not strings, join() will convert them using .toString().
let fruitss = ["apple", "banana", "mango"];
// let resultt = fruitss.join();
let resultt = fruitss.join("|");
// console.log(resultt); // "apple,banana,mango"

let chars = ['H', 'e', 'l', 'l', 'o'];
// console.log(chars.join("")); // "Hello"


let arr5 = ["HTML", "CSS", "JS"];
// console.log(arr5.toString()); // "HTML,CSS,JS"

let str = "HTML+CSS+JS";
let newArr = str.split("+");
// console.log(newArr); // ["HTML", "CSS", "JS"]
//split() is the opposite of join()



//reverse - directly reverrses the original array 
let arrOG = [1, 2, 3, 4, 5];
let arrRev = [...arrOG].reverse()
// console.log(arrRev); // [5, 4, 3, 2,1]
// console.log(arrOG)
// console.log(arrRev)

//sort 
let fruitssss = ["banana", "apple", "cherry"];
fruitssss.sort();
// console.log(fruitssss); // ["apple", "banana", "cherry"]

let numbers = [100, 100, 200, 25, 3, 50];
numbers.sort();
// console.log(numbers); // [100, 25, 3, 50] (wrong order) Because it sorts as strings, so "100" < "25".

//sort the numbers 
numbers.sort((a, b) => a - b)
// console.log(numbers); // [3, 25, 50, 100]


//map function -The map() function in JavaScript is used to transform each element of an array and return a new array with 
// the transformed values — without modifying the original array.


//syntax =  let newArray = originalArray.map((element, index, array) => {
  //                             return transformed element
//            });

// ✅ map() does not mutate the original array.

// ✅ Always returns a new array.


//basic transformation 
let numberss = [1, 2, 3, 4, 5];
let newNumbers = numberss.map((element) =>element * 2)
// console.log(newNumbers); // [2, 4, 6, 8, 10
//convert to objects 
const names = ["Alice", "Bob", "Charlie"];
const users = names.map((name, index) => {
  return { id: index + 1, username: name };
});

// console.log(users);
/*
[
  { id: 1, username: 'Alice' },
  { id: 2, username: 'Bob' },
  { id: 3, username: 'Charlie' }
]
*/

//reduce 
// The reduce() method in JavaScript is a powerful tool that lets you process an array and reduce 
// it to a single value — like a sum, a product, an object, or even another array.
// syntax==
// array.reduce((accumulator, currentValue, index, array) => {
//   // return updated accumulator
// }, initialValue);
// accumulator	The value returned from the previous iteration
// currentValue	The current element being processed
// index	(Optional) Index of the current element
// array	(Optional) The original array
// initialValue	(Optional but recommended) The initial value of accumulator

//sum
const numss = [10, 20, 30, 40];

const total = numss.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output: 100

//maximum value

const max = numss.reduce((acc, curr) => (curr > acc ? curr : acc));//ternery operator 
console.log(max)





const fruit= ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruit.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] ||0) + 1;
  return acc;
},[] );

console.log(count);
/*
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/




//filter 

// The filter() method in JavaScript is used to create a new array containing only those elements that pass a test
//  condition (provided by a callback function).

// callback — a function that returns true to keep the element, or false to discard it.

// element — the current element being processed.

// thisArg — (optional) value to use as this when executing callback.

const num = [1, 2, 3, 4, 5, 6];

const evens = num.filter(nums => nums % 2 === 0);

console.log(evens);  // Output: [2, 4, 6]


const namesss= ["Tom", "Jerry", "Spike", "Tyke"];

const longNames = namesss.filter(name => name.length > 4);

console.log(longNames);  // Output: ["Jerry", "Spike"]


const usersss = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 19 }
];

const adults = usersss.filter(user => user.age >= 18);

console.log(adults);
/*
[
  { name: "Bob", age: 22 },
  { name: "David", age: 19 }
]
*/



let n = ['h','e','e','r','r']
let r = n.filter(n=>n==='e')
console.log(r); // Output: ['e', 'e']
console.log(r.length)