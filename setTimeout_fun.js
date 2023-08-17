console.log("First");


/*Asynchronous Fucntion*/

setTimeout(function() {
    console.log("this will execute later after 3 sec")
} , 3000);

console.log("Second");

console.log("Third");



/*callback call ho jaata after 2 sec*/

function getcheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log('here is cheese',cheese);
        callback(cheese);
    },2000);
}

/*callback method*/
getcheese((cheese) =>{
    console.log("got the cheese",cheese)
})