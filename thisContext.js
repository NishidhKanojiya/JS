const person={
    name:"Nishidh",
    greet(){
        console.log(`hello i am ${this.name}`);
    }
}
person.greet();

const greetFunction =person.greet
greetFunction();///this will print undefined because this keyword is not available in this context

const bindgreet = person.greet.bind({name:"john"})
bindgreet()


//bind call apply examples 
