let aoc = require("../aoc");
let string = require("fs").readFileSync("./Day2/day2data.txt", 'utf8')

let lines = aoc.convertToLines(string);

let runningTotal = 0;

// Loop through each game and test it's validity
for( let i = 0; i < lines.length; i++ ){
    let [gameName, games] = lines[i].split(":");
    runningTotal += calcPower( games );
}

console.log( runningTotal );

/*
Loop through and determine the power of each game by finding the max number of cubes of each color and multiplying.
*/
function calcPower(games){

    let gameArray = games.split(";");
    let cubeCount = {
        "red": 1,
        "green": 1,
        "blue": 1
    };

    for( let i = 0; i < gameArray.length; i++ ){
        // Break the game down into each set of cubes.
        let cubes = gameArray[i].trim().split(",");
        for( let c = 0; c < cubes.length; c++ ){
            let cubeData = cubes[c].trim().split(" ");
            // If the number of cubes of a color is higher than the previous number, set it to the higher of the two..
            cubeCount[ cubeData[1] ] = Math.max( cubeCount[ cubeData[1] ], cubeData[ 0 ] );
        }
    }
    let total = cubeCount[ "red" ] * cubeCount ["green" ] * cubeCount[ "blue" ];

    return cubeCount[ "red" ] * cubeCount ["green" ] * cubeCount[ "blue" ];
}