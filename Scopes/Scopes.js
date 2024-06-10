//Block Scope

{
    let x = 2;  
    console.log(x); 
  } 
  console.log(x);  // cant use x here


//Local Scope
  function cars() {
    let carName = "BMW";
    console.log(carName); 
    // code here CAN use carName
  }
  cars();
  console.log(carName); 

 
//Function Scope