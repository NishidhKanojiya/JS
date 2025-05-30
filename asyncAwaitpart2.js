function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("post data fetched")
        }, 2000);
    })
}

function fetchCOmmentdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("comment data fetched")
        }, 3000);
    })
}

async function getBlogdata(){
    try {
        console.log("Fetching dat....");
        // const data = await fetchPostData();  /this is a waty but there is an alternate Promise.all
        // const commentdata=await fetchCOmmentdata();

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCOmmentdata(),
            ]);
        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");
        
        
        
    } catch (error) {
        console.log("error in fetching data",error);
        
    }
}

getBlogdata()