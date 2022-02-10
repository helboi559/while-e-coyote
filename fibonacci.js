//input: number count
//output: logs the count of the fibonnaci numbers

const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a value of n: '))
let prevNum= 0
let currNum= 0
let nextNum=1
let counter = 0
//while n is !== actual
while (n > counter ) {
    //next = prev + act
    //actual = 
    console.log(currNum)
    prevNum = currNum + nextNum;
    currNum = nextNum
    nextNum = prevNum
    counter ++
    
}