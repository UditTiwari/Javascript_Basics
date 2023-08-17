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



