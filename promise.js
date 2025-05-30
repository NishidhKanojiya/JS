//promise
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success = true
        if(success){
            resolve("data fetched")//we can pass object array string whatever
        }
        else{
            reject("Error fetching data")
        }
            
        }, 3000);
        
    });
}

fetchData()
    .then((data)=>{console.log(data)
        return data.tolowerCase();
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error))