function empDetails(name,salary){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Employee name is ${name} and salary is ${salary}`);
            resolve("suceess")
        },1000);
    });
};


console.log("Fetching data 1");
empDetails("Dipti", 20000).then(() => {
    console.log("Fetching data 2");
    return empDetails("Vaibhav", 83494);
}).then(() => {
    console.log("Fetching data completed");
}).catch((error) => {
    console.error("An error occurred:", error);
});
