
// const getPromise =()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         resolve("Success");
//     });
// };

// let promise=getPromise();

// promise.then(()=>{
//     console.log("promise fulfilled")
// })

//***************Question(Callback hell)**********************
// function getData(dataId, callback){
//     setTimeout(()=>{
//     console.log("Data",dataId);
//     if(callback){
//         callback();
//     }
// },2000);
// }

// getData(1,()=>{
//     console.log("Data 1");
//     getData(2,()=>{
//         console.log("Data 2");
//         getData(3,()=>{
//             console.log("Data 3");
//         })
//     })
// })

//rectify using promises

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000 );
    });
};

console.log("Fetching data 1");
let p1 = getData(123);

p1.then(()=>{
    console.log("Fetching data 2")
    let p2 = getData(456);
    p2.then(()=>{
        console.log("Fetching data 3")
         getData(789);
    });

});

        //Other way to achieve promise  (Promise chain)

console.log("Fetching data 1");
getData(123).then(()=>{
    console.log("Fetching data 2");
    return getData(456);
}).then(()=>{
    console.log("Fetching data 3");
    return getData(789);
})
    

