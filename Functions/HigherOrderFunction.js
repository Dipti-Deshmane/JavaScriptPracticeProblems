//HOF, passing function as a argument
console.log("HOF, passing function as a argument");
function person(operation,num){
    for(let i=1; i<=num;i++){
        operation();
    }
}

function greet(){
    console.log("Good morning");
}

person(greet,4);


//HOF, function that returns other function

console.log("HOF, function that returns other function");
function person(num){
    for(let i=1; i<=num;i++){
        function greet(){
            console.log("Good morning");
        }
        greet();
    }

}

person(4);
