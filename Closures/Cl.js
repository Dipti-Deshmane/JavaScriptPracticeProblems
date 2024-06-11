function outerFunction(){
    let a=10;
    function innerFunction(){
        let b=20;
        console.log(a+b);

    }
    innerFunction();
}
const newFunction = outerFunction();