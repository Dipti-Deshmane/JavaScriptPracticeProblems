function addition(x,y){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let ans = x+y;
            console.log(ans);
            resolve("sucess");
        },2000);
    
    });
};

async function result(){
    await addition(4,6);
    await addition(65,93);
    await addition(6,43);
}
result();