
//1
function makeTea(typeofTea){
    return `Making ${typeofTea}`;
}
let teaOrder =makeTea("greentea")
// console.log(teaOrder)

//2
function teaOrders(teaType){
    function ConfirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return ConfirmOrder()
}
console.log(teaOrders("chai"))

//3 arrow function 
const calculateTotal = (price,quantity)=> price * quantity;
console.log(calculateTotal(10,5))


//4 // exampleof higher order function -  a function is passed as an argument to another function . for ex foreach , map , filter etc
// array.forEach(element => {        //here the arrrow function is passed as an argument to the forEach function
    
// });


function processTeaOrder(typeofFunction){
    return typeofFunction("earl grey")
}
function makeTeaa(tea){
    return `Making ${tea}`;

}
let n=processTeaOrder(makeTeaa)
console.log(n)


//
function createTeaMaker(){
    return function(teatyper){
        return `Making ${teatyper}`;
    }
}

let a =createTeaMaker()
console.log(a)//[Function (anonymous)]
console.log(a())//Making undefined
console.log(a("earl grey"))//Making earl grey




// function createTeaMaker(name){
//     return function(teatyper){
//         return `Making ${teatyper} for ${name}`;
//     }
// }

// let a =createTeaMaker("NISHIDH")
// console.log(a("chai"))