const calculate = (a,b,operation) => {
    return operation(a,b);
}


/* Method 1 */
//pass the fucntion dont call it 
const result =  calculate(3,4, function(num1,num2){
    return num1 + num2
})

console.log(result);

/* Method 2 */
const subtraction = (a,b) => a-b ;

//pass the fucntion dont call it 
const subResult = calculate(8,3,subtraction)

