//Asynchronous JavaScript with Event Loop
// Task 1: Simulating Asynchronous Behavior

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

// Use setTimeout to simulate this behaviour.

function simulateAsyncTask(){
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task Finished");
    }, 2000);  
}
// simulateAsyncTask()

// Task 2: Simulate Multiple Async Tasks with Different Delays

// Create a function simulateMultipleTasks() that starts three asynchronous tasks
//  with different delays (1 second, 2 seconds, and 3 seconds).

// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

function simulateMultipleTasks(){
    setTimeout(() => {
        console.log(`Task 1 finished`)
    }, 1000);
    setTimeout(() => {
        console.log(`Task 2 finished`)
    }, 2000);
    setTimeout(() => {
        console.log(`Task 3 finished`)
    }, 3000);
}
// simulateMultipleTasks()


//Task 3: Async Task with Callback Function

// Create a function fetchDataWithCallback(callback) that simulates 
// fetching data asynchronously using setTimeout (after 2 seconds).

// Once the data is “fetched”, it should invoke the provided callback 
// function with "Fetched data" as an argument.

function fetchDataWithCallback(callback){
    setTimeout(() => {
        const data ="Fetched data"
        callback(data)
    }, 2000);
}
fetchDataWithCallback(function(result){
    console.log(result);
    
})



//Prototypal Inheritance in JavaScript
// Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). 
// Then create a constructor Dog that inherits from Animal and adds a method bark()

function Animal(){
    this.makeSound = function(){
        console.log("Animal makes a sound")
    }
}
function Dog (){
    Animal.call(this)
    this.bark = function(){
        console.log("Dog barks")
    }
}
              