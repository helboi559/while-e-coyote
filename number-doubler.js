//input: promtp user for num
//output: logged numbers until they are >= to 100
const prompt = require('prompt-sync')({sigint:true});

//num to double if necessary
let num = Number(prompt('enter a number: '))
//optional to add variable of 100
let cap = 100
while (num <= cap) {
    //double num
    num *= 2
    
    //log curr nums
    console.log(num)
    
}


