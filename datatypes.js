/*
String 
Number
Bigint 
boolean

undefined
null


Objects

symbol


*/

// let isLoggedin = false
// let name = "nishidh"
// let age = 29


// //objects
// let carTypes=["tata","ford"];
// let carDetails = {engine:"1.5 diesel",hp:23}

// let getAge = age
// console.log(getAge)


// // for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var:", i), 100);
// }

// Outputs:
// var: 3
// var: 3
// var: 3

// var x;          // declaration hoisted
// console.log(x); // undefined
// x = 5;          // assignment stays where it is


//operators :logical opeartors 

// let youAreLoggedIn = true
// let isPaid = false;

// console.log(youAreLoggedIn || isPaid)


//primitives datatypes

// let age = 23 
// console.log(age) //23
// console.log(typeof age)    //number

// let fee = new Number (24)
// console.log(fee)//[Number:24]
// console.log(fee.valueOf()) //24
// console.log(typeof fee) //object


//boolean
//null and undefined
// let firstname = null 
// console.log(firstname) //null
// let lastname ;
// console.log(lastname) //undefined
// let middlename = undefined
// console.log(middlename) //undefined


//String

// let myString = "Hello"
// let myStringOne = "Hola"
// let greetMessage = myString + "Nishidh"
// console.log(greetMessage) //HelloNishidh

// let newGreet = `Hello ${myStringOne} Nishidh`
// console.log(newGreet) //Hello Hola Nishidh


// let demo=`value of 2*2 is ${2*2}`
// console.log(demo)

//Symbol -- it is used to create unique identifiers for object properties
//it can be used to create unique keys for objects


// let sm1=Symbol()
// let sm2=Symbol()
// console.log(sm1)
// console.log(sm2)

// console.log(sm1 == sm2)//false


//using symbol as the object keys 
// const user={}
// const id = Symbol("userid")
// user[id]=101
// console.log(user[id]) //101
// console.log(user)
// user.id=202

// //symbols are not accessible with dot notations because they are not strings 
// for (let key in user) {
//   console.log(key); // does not show symbol-keyed properties
// }

// console.log(Object.values(user))





//stack (Primitive) Heap (Non primitive)


//  let myName ="Nishidh"
//  console.log(myName)
//  let anotherName = myName
//  anotherName="Nikhil"
//  console.log(anotherName)



//  let userOne={
//     email:"Nishidh@gmail.com",
//     password:"pass"
//  }

//  let userTwo= userOne
//  userTwo.email="sunil@gmail.com"

//  console.log(userOne.email)
//  console.log(userTwo.email)

//NON-PRIMITIVES DATA TYPES 
//Objects

// let name ={}
// console.log(name)//{}
// console.log(typeof name)//object


// const userName = {
//     firstname :"Nishidh",
//     isLoggedIn:true,
//     "first name":"Shantanu"
// }

// console.log(userName)

// userName.firstname="Nikhil"
// userName.lastName="kanojiya"
// userName.isLoggedIn=false
// console.log(userName)//as we have defined the object with the const , object is an non primitive and is stored in heap 
//                     //but he data which is present inside the object that is the key value pair is of primitive data type 
//                     //so we can change the value of the key value pair but we cannot change the key itself

// console.log(userName['first name'])//
// console.log(userName['firstname'])


// let date = new Date()
// console.log(date)

//Arrays

// let user = []
// console.log(user)//[]
// console.log(typeof user)//object

// let num= [1,2,3,4,5]
// console.log(num)//[1,2,3,4,5]
// console.log(num[0])

// let user1 = ["Nishidh",true]


//type conversion in js 
//implicit conversion in js is not the best 
// console.log("2" + 2)//22
// console.log(2+"2")//22
// let isValue = true
// console.log(isValue + 1)//2
// console.log(Number(isValue))

// let value = "2abc"
// console.log(Number(value))//Nan - no a number 

// console.log(Number(null))//0
// console.log(Number(undefined))//Nan
// console.log(String(null))//null
// console.log(String(undefined))//undefined






