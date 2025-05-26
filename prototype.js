let comp = { cpu :12}
let lenovo = { 
    screen:"hd",
    __proto__:comp
}
let dell = { ram : 16}

console.log(`computer`,comp.__proto__)
console.log(lenovo.__proto__)


let genericCar={
    tyres:4
}

let tesla ={
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)
console.log(tesla.tyres)
console.log(tesla)
console.log(genericCar)
// console.log(genericCar)
console.log(Object.getPrototypeOf(tesla))