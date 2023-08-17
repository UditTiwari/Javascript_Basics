let students = [
    {id:"001" ,name : "Goku" ,sports : "Football"},
    {id:"002" ,name : "vegata" ,sports : "Ludo"},
    {id:"003" ,name : "Goten" ,sports : "Football"},
    {id:"004" ,name : "Gohan" ,sports : "Cricket"},
    {id:"005" ,name : "Naruto" ,sports : "Football"}

]


// students.filter((curValue,index,array) => {

// })


const newArray = students.filter((curValue) => {
    if (curValue.id % 2 ==0) return true;
    else return false;
})

console.log(newArray);