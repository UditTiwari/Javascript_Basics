/* to create a variable we have (var let const)*/

var customer = "Nike";
console.log(customer)


/*var keyword it creates a GLOBAL VARIBALE (that can be used by anyone and be create confllict)*/
var customer = "Nike";
console.log("Hello meet our customer, "+ customer)



/* let keyword(we used this instead of var to avoid global conflict) */

document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper ").classList.add("nav-open");
    let customer = "first"; /*even if we have used var here it is local to the fuction */
});

let customer = "Outside the fcution "; /*It will not affect the customer variable inside the function above*/



/* const keyword(same as let) and used it when we don't need to reassign the vaklue to varibale we used const */



const customer = "Udit";
let balance = 2000;
console.log("Hi , "+ customer + ". Your balance is USD " + balance);

balance = balance +200 ;

console.log("Hi , "+ customer + ". Your New balance is USD " + balance);
