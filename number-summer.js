//input: numbers
//output: log sum nums when "done" is typed

//initialize prompt-sync
//SIGNINT IS IN SECOND PARENTHESIS
const prompt = require("prompt-sync")({sigint: true});
// nums question
let nums = prompt("enter numbers(hit 'done' when comeplete): " )
//set flag statement
// let doneAdding = false
//set running total 
let total = 0
//while flag
// while (!doneAdding) {
//     // nums question
//     let nums = prompt("enter numbers(hit 'done' when comeplete): " )
    
//     // if nums !== done
//     if (nums === 'done') {
//         console.log(`the sum of numbers is ${total}`)
//         doneAdding = true;
//     } else {
//         //add nums
//         total = total + parseInt(nums)
//         nums = prompt("enter numbers(hit 'done' when comeplete): " )
//     }

// }

while (nums !== 'done') {
    
    
    //add nums
    total = total + parseInt(nums)
    nums = prompt("enter numbers(hit 'done' when comeplete): " )
    // if nums !== done
    // if (nums === 'done') {
    //     console.log(`the sum of numbers is ${total}`)
    //     doneAdding = true;
    // } 

}
console.log(`the sum of numbers is ${total}`)
