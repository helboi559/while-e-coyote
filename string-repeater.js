//input: string
//output: log a string that after being doubled is >= 10

//intialize prompt sync
const prompt = require("prompt-sync")({sigint:true});

let question = prompt('enter a string: ') ;
let newWord = ""
let lengthWords = 0
//while str length < 10 
while (lengthWords < 10) {
    // create new string to collect 
    newWord += question 
    //log current visual of string
    console.log(newWord)
    //keep running length count by adding by length
    lengthWords += question.length ;
    
}
