let aoc = require("../aoc");
let string = require("fs").readFileSync("./day1/day1data.txt", 'utf8')

let lines = aoc.convertToLines(string);

function convertToNumbers(text){
    /* 
    Build a dictionary of all the things we want to search for and their corresponding digit.
    Set the value to a string to match JavaScript concat instead of add when we get to the end.
    */
    let stringMap = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "zero": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
    }

    // Keep track of what we matched and where we matched it.
    let earliestMatch = text.length + 1;
    let latestMatch = -1;
    let firstNumber = 0;
    let lastNumber = 0;

    // Loop over each dictionary item and see if you can find it in the string.
    Object.entries(stringMap).forEach(([key,val]) => {

        // Match from the start
        let matchPos = text.indexOf(key);

        // If we found a match, and it's earlier than the last match, track it.
        if(matchPos >= 0 && matchPos < earliestMatch){
            earliestMatch = matchPos;
            firstNumber = val;
        }

        // Match from the end this time, reversing the string and adding 1 to the match to get the right position.
        matchPos = reverseString(text).indexOf(reverseString(key));

        // If we found a match, and it's later than the last match, track it.
        if(matchPos >= 0 && text.length - (matchPos + 1) > latestMatch){
            latestMatch = text.length - (matchPos + 1);
            lastNumber = val;
        }
    });

    return firstNumber + lastNumber;
}

// Function to quickly reverse a string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

let runningTotal = 0;
for( let i = 0; i < lines.length; i++){
    let currentLine = convertToNumbers(lines[i]);
    runningTotal += ( parseInt( currentLine.toString().charAt() + currentLine % 10 ) );

}

console.log(runningTotal);