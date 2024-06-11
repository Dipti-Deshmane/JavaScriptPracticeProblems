//Square of array element
// let arr =[2,5,6,7];
// let newarr = arr.map((i)=>{
//     return i*i;
// });
// console.log(newarr);
// console.log(arr);


//map in DS

let userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'User');
userRoles.set('Carol', 'Moderator');

console.log(userRoles.get('Alice')); // 'Admin'

for (let [user, role] of userRoles) {
    console.log(`${user} is a ${role}`);
}