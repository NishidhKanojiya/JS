let car = {
    make: "toyota",
    model: "camry",
    year: 2020,
    start: function () {
        return `${this.make} started ${this.model} in the year ${this.year}`
    }
}

// console.log(car.start())
//traditional way and we cant use it on and on


//oops create a constructor function and use it many times

function person(name, age) {
    this.age = age
    this.name = name
}

let john = new person("john", 30)
// console.log(john)


//prototype chain - we can add methods in the constructor 

function animal(type) {
    this.type = type
}
animal.prototype.speak = function () {
    return `${this.type} is a type`
}


//array prototype 
Array.prototype.nishidh = function () {
    return `custom ${this}`
}
let arr = [1, 2, 3, 4, 5]
// console.log(arr.nishidh())


//class
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.make} started ${this.model}`
    }
}
class Car extends Vehicle {
    drive() {
        return `${this.make}:this is an inheritance exmaple`
    }
}

let mycar = new Car("Toyota", "Camry")
// console.log(mycar.start())
// console.log(mycar.drive())


//Encapsulation

class BankAccount {
    #balance = 0

    deposit(amount) {
        this.#balance += amount
        return this.#balance
    }
    getBalance() {
        return `$ ${this.#balance}`
    }
}
let account = new BankAccount()
// console.log(account.balance)undefined
// console.log(account.#balance)

console.log(account.getBalance())


//Abstraction -- Abstraction is one of the core principles of Object-Oriented Programming (OOP), and it means:

// "Hiding complex internal details and showing only the essential features to the user."

// Why Use Abstraction?
// To reduce complexity.

// To hide implementation details.

// To expose only what is necessary for interaction.

// To improve maintainability and security of the code.

class CoffeeMachine {
    start() {
        return "Coffee machine started"
    }
    makeCoffee() {
        return "Coffee is being made"
    }
    getMachineStatus() {
        return "Machine is working fine"
    }
    PressButton() {
        let start = this.start()
        let coffee = this.makeCoffee()
        let status = this.getMachineStatus()
        return `${start},${coffee},${status}`
    }

}

let coffee = new CoffeeMachine()
// console.log(coffee.PressButton())


//Polymorphism --the ability of something to have or to be displayed in more than one form 

class Bird {
    fly() {
        return "Bird is flying"
    }
}
class penguin extends Bird {
    fly() {
        return "Penguins cant fly"
    }
}
let bird = new Bird()
let penguin1 = new penguin()
// console.log(bird.fly())
// console.log(penguin1.fly())

//static method --it can only be called by its class itself
class Calculator {
    static add(a, b) {
        return a + b
    }
}
let minicalc = new Calculator()
// console.log(minicalc.add(2,3)) //we cant do it 
console.log(Calculator.add(5, 6))



//getters and setters 
class Employee {

}


//tasks
//Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
class Vehicle1 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`
    }
    move() {
        return `The Vehicle is moving`
    }
    static isVehicle(obj) {
        if (obj instanceof Vehicle1)
            return true
        else
            return false
    }
}
class Car1 extends Vehicle1 {
    startEngine() {
        return "Engine started"
    }
    move() {
        return `The car is driving`
    }
}


// Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".



// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that 
// checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.



//Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount).
//  Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.


class BankAccount1 {
    #_balance
    constructor(balance = 0) {
        this.#_balance = balance
    }
    deposit(amount) {
        if(amount <=0){
            return "Invalid amount"
        }
        else{
            return this.#_balance += amount
        }
    }
    withdraw(amount) {
        if(amount<=0){
            return "Invalid amount"
        }
        else if (amount >this.#_balance){
            return "Insufficient funds"
        }
        else{
            return this.#_balance -= amount
        }

    }
    get balance() {
        return this.#_balance
    }
    set balance(value) {
        throw new Error("Cannot set balance directly")
    }
}


//task 2
// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle
//  that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape{
    area(){
        return 0
    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        return 3.14 * this.radius ** 2
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    area(){
        return this.width * this.height
    }
}
