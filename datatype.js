/* When you use the + operator with a number and a string, JavaScript performs type coercion and converts the number to a string.
 It then concatenates the two strings together.
 This is known as [implicit type conversion].*/

 let num1 = 12; // num1 is a number (12)
let num2 = "13"; // num2 is a string ("13")

console.log(num1 + num2);


/*To perform addition and get the numeric result, you should convert the string num2 to a number explicitly using parseInt() or the unary plus operator:

Using parseInt():

*/

let num_1 = 12;
let num_2 = "13";
console.log(num1 + parseInt(num2)); // Output: 25 (12 + 13)
