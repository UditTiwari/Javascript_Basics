function getCheese(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const cheese = "cheese";
            console.log('here is the cheese',cheese)
            resolve(cheese);
        },2000)
    })
}

console.log(getCheese())


function makeDough(cheese){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const dough = cheese + '🫓';
            console.log('here is the dough',dough);
            resolve(dough);
        },2000);
    })
}

function makePizza(dough){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const pizza = dough + '🍕';
            console.log('here is the pizza',pizza);
            resolve(pizza)
        },2000);
    })
}

getCheese()
.then((cheese) => {
    console.log("here is the cheese ",cheese);
    return makeDough(cheese);
})
.then((dough) =>{
    console.log("here is the dough ",dough);
    return makePizza(dough);
})
.then((pizza) =>{
    console.log("here is the pizza ",pizza);
})
.catch((data) => {
    console.log("error occured",data)
})