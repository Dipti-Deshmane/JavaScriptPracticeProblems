function greetings(){
    return new Promise((resolve,reject)=>{
        console.log("Good afternoon");
        resolve("success");
    })

}

let g1 = greetings();
g1.then((res)=>{
    console.log(res);
})