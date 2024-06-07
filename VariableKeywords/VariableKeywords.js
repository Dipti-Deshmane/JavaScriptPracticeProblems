
//var keyword
var num1 =40;
var num1 =100;        //Can be reclared and update
function add(){
    var num1 = 10;
    console.log(num1);

}
add();
console.log(num1);



//let keyword
let num2 =40;
console.log(num2);
num2 =50;            //Can not reclared but can update

function add(){
    let num2 = 10;
    console.log(num2);

}
add();
console.log(num2);



//const keyword
const num3 =40;      //Can not reclared and update
console.log(num3);  

function add(){
    let num3 = 10;
    console.log(num3);

}
add();
console.log(num3);



