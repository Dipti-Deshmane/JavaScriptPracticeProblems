//find even number
let arr =[1,3,5,6];

let newarr = arr.filter((i)=>{
    return i%2===0;
});

console.log(arr);
console.log(newarr);


//find 90+ student marks from array using filter

let student=[20,40,90,91,30,50,60];
let newArr= student.filter((i)=>{
    return i>=90;
});
console.log(newArr);