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


//Using Async await

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data is ", dataId);
            resolve("success");
        },2000);
    });
};

async function getAlldata(){
    await getData(123);
    await getData(456);
    await getData(789);
}
getAlldata();