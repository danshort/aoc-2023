let aoc = require("../aoc");
let string = require("fs").readFileSync("./day1/day1data.txt", 'utf8')

let lines = aoc.convertToLines(string);
console.log("foo");
let runningTotal = 0;
for( let i = 0; i < lines.length; i++){
    let currentLine = lines[i];

    // Get rid of any non-digit characters (I cheated here)
    let onlyDigits = currentLine.replace(/[^0-9]/g, '');

    // Use .charAt() to get the first character of the digits string and mod 10 to get the last. Concat and parseInt.
    runningTotal += ( parseInt( onlyDigits.toString().charAt() + onlyDigits % 10 ) );

}

console.log(runningTotal);