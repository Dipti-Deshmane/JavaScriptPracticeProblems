function demo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hello, Good evening");
            resolve("success")
        },1000);

    });
};

async function getAllData(){
        await demo();
        await demo();
        await demo();
}
getAllData();



