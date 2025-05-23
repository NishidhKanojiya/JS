// let sum = 0 
// let i = 1 
// while(i<= 5){
//     sum = sum + i
//     i = i + 1
// }
// console.log(sum)

// let countdown =[]
// let e = 5
// while(e >=1){
//     countdown.push(e)
//     e-=1
// }
// console.log(countdown)

// let favtea 
// do{
//     favtea= prompt("enter the tea name ");   //run it on browser         
//     if(favtea!=="stop"){
//     console.log(favtea)
//     }
// }while(favtea!=="stop")






// let total = 0 
// k = 1
// do {
//     total = total + k
//     k = k + 1
    
// } while (k <= 3);
// console.log(total)

// let arr = [2,4,6]
// let multipliedarray=[]
// // let multipliedarray = arr.map(nums=>nums*2)
// for(let i = 0 ; i < arr.length; i++){
//     multipliedarray.push(arr[i]*2)
// }
// console.log(multipliedarray)



//loops challenges 

let arr = ["green tea","black tea","chai","oolang tea"]
let arr2=[]
//push till chai 
// for(let i = 0 ; i<arr.length;i++){
//     // arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))//make all the first letters capital 
//     // arr2.push(arr[i])
//     if(arr[i]==="chai")break

//     // if(arr[i]!=="chai"){
//         arr2.push(arr[i]) 
//     // }
// }
// console.log(arr2)


//skip chai 
for(let i=0 ; i < arr.length ; i++){
    if(arr[i]==="chai")continue
    arr2.push(arr[i])
}
// console.log(arr2)

 


// console.log(nums2) 


//for-of loop 

let nums = [1,2,3,4,5]
let nums2 = []
for (const num of nums) {
    if(num === 4)break
    nums2.push(num)
}
// console.log(nums2)


let teas = ["green tea","black tea","chai","oolang tea"]
let teas2 = []
for (const tea of   teas) {
    if(tea === "chai")continue
    teas2.push(tea)
    
}
// console.log(teas2)


//objects opt loops
let obj = {
    "London":230000,
    "Paris":200000,
    "Tokyo":300000,
    "NewYork":400000,
    "Berlin":250000
    }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
let obj2 ={}
for (const  city in  obj) {
    // console.log(obj[city])
    // key = value
    if(city ==="Berlin")break
    obj2[city]= obj[city]
    
}
// console.log(obj2)

let cities = {
    "London":230000,
    "Paris":200000,
    "Tokyo":300000,
    "NewYork":400000,
    "Berlin":250000
    }
let city2={}
for (const city in cities) {
//    console.log(city)
    if(cities[city]<=300000){
        continue
    }
    city2[city]=cities[city]
}
// console.log(city2)



//foreach --- this loop is an method of the array and with a parameter of function . we can apply function to all the single 
// value of the array and  return 
let teaTypes = ["chai", "green", "black", "white", "oolong"]
let newTeatypes = []
teaTypes.forEach(function(tea){
    if(tea === "chai")return
    newTeatypes.push(tea)
    
});
console.log(newTeatypes)


let mycities = ["London", "Paris", "Tokyo", "NewYork", "Berlin"]
let newCities = []
mycities.forEach(city => {
    if(city === "Tokyo")return 
    newCities.push(city)
    
});
console.log(newCities)




let array3 = [2,4,7,8]
let mularray = []
array3.forEach(num =>{
    if(num === 7)return
    mularray.push(num*2)
})
console.log(mularray)



let chais = ["chai", "green tea", "black tea", "white teassssss", "oolong"]
let newChais = []
for (const chai  of chais) {
    if(chai.length>10)break
    newChais.push(chai)
    
}
console.log(newChais)