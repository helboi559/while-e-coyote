//input: numbers
//output: log sum nums when "done" is typed

//initialize prompt-sync
//SIGNINT IS IN SECOND PARENTHESIS
//this is your function name BELOW!!!!!
const prompt = require("prompt-sync")({sigint: true});
// nums question
let nums = prompt("enter numbers(hit 'done' when comeplete): " )
//set running total 
let total = 0
//set cond if num 
while (nums !== 'done') {
    //add nums
    total = total + parseInt(nums)
    nums = prompt("enter numbers(hit 'done' when comeplete): " )
}
//another way of using return
console.log(`the sum of numbers is ${total}`)
