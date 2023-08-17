let students = [
    {id:"001" ,name : "Goku" ,sports : "Football"},
    {id:"002" ,name : "vegata" ,sports : "Ludo"},
    {id:"003" ,name : "Goten" ,sports : "Football"},
    {id:"004" ,name : "Gohan" ,sports : "Cricket"},
    {id:"005" ,name : "Naruto" ,sports : "Football"}

]




const names = students
.filter((curValue) => curValue.sports === "Football")
.map((curValue) => {
//    return curValue.name;
    return `<li>${curValue.name}</li>`;
});


console.log(names);

const div = document.getElementById('container');

div.innerHTML = `<ul>${names.join('')}<ul/>`