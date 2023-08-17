/*callback call ho jaata after 2 sec*/

function getcheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log('here is cheese',cheese);
        callback(cheese);
    },2000);
}


async function makeDough(cheese,callback){
    await setTimeout(() => {
        const dough = cheese + '🫓';
        console.log('here is the dough',dough);
        callback(dough);
        
    },2000);
}


// async function makeDough(cheese,callback){
//     let x = "something";
//     await new Promise(resolve => setTimeout(() => {
//         x = "change"
//         const dough = cheese + '🫓';
//         console.log('here is the dough',dough);
//         callback(dough);
//         resolve(); // resolve the promise to signal that the timer is finished
//     },2000));
//     console.log({x});
    
// }


function bakePizza(dough,callback){
    setTimeout(() => {
        const pizza = dough + '🍕';
        console.log('here is the pizza',pizza);
        callback(pizza);

    },2000);
}

/*callback method*/
// getcheese((cheese) =>{
//     console.log("got the cheese",cheese)
// })

getcheese((cheese) =>{
    makeDough(cheese,(dough) =>{
        bakePizza(dough,(pizza) =>{
            console.log('Here is our pizza ready bitch',pizza)
        });
    });
});




//pizza -> dough -> cheese