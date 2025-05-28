function myCar(make,model){
    this.make = make 
    this .model = model
}
let toyota = new myCar('Toyota','Camry')
let ford = new myCar('Ford','Mustang')

// console.log(toyota)
// console.log(ford)

function Tea(type){
    this.type = type
    this.describe=function(){
        return `This is a ${this.type} tea`
    }
}
let greenTea = new Tea('Green')
// console.log(greenTea.describe())

function animal (species){
    this.species = species
}

animal.prototype.sound=function(){
    return `The ${this.species} makes a sound`
}

let dog = new animal('Dog')
// console.log(dog.sound())
let cat = new animal('Cat')
// console.log(cat.sound())


//to raise an error
function drink(name){
    if(!new.target){
        throw new Error('drink must be called with new keyword')
    }
    this.name = name
}

let tea = new drink('Tea')
console.log(tea)
let coffee =  drink('Coffee')
console.log(coffee)

//Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



// Task 2: Handle Errors

// Modify the Person constructor to throw an error if the age is not a positive number.



function Person(name,age){
    if(age<0){
        throw  Error `Age must be a positive number`
    }
    this.name = name 
    this.age = age
    this.greet=function(){
        return `Hello my name is ${this.name}`
    }
}

