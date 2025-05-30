function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"nishidh",url:"https://google.com"})
        }, 3000);
    })
}


// fetchUserData
//     .then()
//     .catch()

async function getUserData(){//await can be used if my function is async
    try {
        console.log("fetching user data....")
        const userData =await fetchUserData()
        console.log("User data:",userData)
    } catch (error) {
        console.log("Error fetching data" ,error);
        
    }
}

getUserData()