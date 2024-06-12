function employee(name,salary){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(`Employee name is ${name} and his salary is ${salary}`)
          resolve("success")
        },2000);
    });
};

async function empDetails(){
    await employee("Dipti",40000);
    await employee("kirti",40300);
    await employee("vaibhav",42000);
};
empDetails();