function getCheese(){
    setTimeout(() => {
        const cheese = 'chesse dedo';
        return cheese;
    },2000)
}


const ticket = new Promise(function (resolve,reject){
    const isBoarded =false;
    if(isBoarded){
        resolve("yOR ARE NOT IN THE fLIGHT");
    } else {
        reject("yOUR FLIGHT HAS BEEN CANCELLED");
    }
});


ticket.then((data) => {
    console.log('got it',data);
}).catch((data) => {
    console.log("oh no",data);
});f