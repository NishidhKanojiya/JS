function Person(name){
    this.name= name
}

Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}.`);
}
let person = new Person("Nishidh")
person.greet() //Hello, my name is Nishidh.