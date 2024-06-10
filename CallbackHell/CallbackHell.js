function getData(dataId, callback){
    setTimeout(()=>{
    console.log("Data",dataId);
    if(callback){
        callback();
    }
},2000);
}

getData(1,()=>{
    console.log("Data 1");
    getData(2,()=>{
        console.log("Data 2");
        getData(3,()=>{
            console.log("Data 3");
        })
    })
})
    
