function sub(a,b){
    console.log(a-b);
};

function calculator(a,b,callback){
    callback(a,b);
}

calculator(3,5,sub)
