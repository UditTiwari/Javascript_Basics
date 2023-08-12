
    
let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

function printEXAccounts(bankAccounts) {
    console.log(bankAccounts)
// write your solution here
for (let a in bankAccounts){
    // console.log(bankAccounts[a])
     new_res = bankAccounts[a].slice(0,2)
    if (new_res == "EX"){
        console.log(bankAccounts[a]);
        
    }

    
}
    
    
}

printEXAccounts(bankAccounts);





    
// let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

// function printEXAccounts() {
    
//     // Run a loop through the bankAccounts array
//     for(let i = 0; i < bankAccounts.length; i++) {
      
//       // Send to the console only the ones starting with "EX"
//       if (bankAccounts[i].slice(0,2) === "EX") {
//         console.log(bankAccounts[i]);
//       }
 
//     }
 
// }

// printEXAccounts(bankAccounts);