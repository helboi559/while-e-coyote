//input: 2 nums (x-y)
//output: add +1  to X until divisible by y

// Enter x: 
// > 9
// Enter y: 
// > 2

// 9
// 10 is divisible by 2

const prompt = require('prompt-sync')({sigint:true});

//x var
//y var
let x = prompt('Enter a num for X: ')
let y = prompt('Enter a num for Y: ')


//while x !/ y \
while (x % y !== 0 ) {
    //x ++
    x ++
}
//log statement
console.log(`${x} is divisible by ${y}`)