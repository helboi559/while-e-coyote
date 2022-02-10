//input: string
//output: log a string that after being doubled is >= 10

//intialize prompt sync
const prompt = require("prompt-sync")({sigint:true});

let question = prompt('enter a striong: ') ;
let newWord = ""
let lengthWords = 0
//while str length < 10 
while (lengthWords < 10) {
    // double string length
    newWord += question 
    lengthWords += question.length ;
    //ask question again
}
//log new word
console.log(`${newWord}`)