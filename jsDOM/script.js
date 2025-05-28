// console.log("Nishidh")
// console.log(document)
//example 1 

document.getElementById("changeTextbutton")
    .addEventListener("click",function(){
        //console.log(this)
        let para =document.getElementById("mypara")
        // console.log(para)
        para.textContent="the paragraph is changed"
})


//example 2 -- we can not use arrow function instead of function keyword 
document 
    .getElementById("highLightfirstcity")
    .addEventListener("click",function(){
        let cities = document.getElementById("citiesList")
        let firstCity = cities.children[0]
        firstCity.style.backgroundColor="yellow"
        })

//example 3

document.getElementById("changeOrder")
.addEventListener("click",function(){
    let order = document.getElementById("CoffeeType")
    order.textContent="Espresso"
})

//example 4

document.getElementById("addNewItem")
.addEventListener("click",function(){
   let newItem= document.createElement('li')
   newItem.textContent="Eggs"
    let list = document.getElementById("shoppinglist")
    // console.log(list.textContent = "nishidh")
    list.append(newItem)
})

//example 5
document.getElementById("removeLastTask")
.addEventListener("click",function(){
    let list = document.getElementById("tasklist")
    let lastTask = list.childern[list.children.length-1]
    list.removeChild(lastTask)
})


//example 6
document.getElementById("clickButton")
.addEventListener("click",function(){
    alert("hii")
})

//example 7
document.getElementById("teaList")
.addEventListener("click",function(event){
    if (event.target && event.target.matches('.teaItem')) {
        alert("you selected "+event.target.textContent)
        
    }
})

//example 8
document.getElementById("feedbackForm")
.addEventListener('submit',function(event){
    event.preventDefault()
    let input = document.getElementById("feedbackInput")
    let feedback = input.value
    console.log(feedback)
    let p = document.getElementById("feedbackDisplay")
    p.textContent = feedback
})

//example 9

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent=`DOM fully loaded`
})

//example 10

document.getElementById("toggleHighLight")
.addEventListener('click',function(){
    let text = document.getElementById("descriptionText")
    
})

