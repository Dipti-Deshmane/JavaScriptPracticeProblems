function add(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                return num1 +num2+ num3+num4;
            }
        }
    }
}
const result = add(1)(3)(4)(5); //function currying
console.log(result);

