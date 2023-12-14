let aoc = require("../aoc");
let string = require("fs").readFileSync("./day2/day2data.txt", 'utf8')

let lines = aoc.convertToLines(string);

let runningTotal = 0;

// Loop through each game and test it's validity
for( let i = 0; i < lines.length; i++ ){
    let [gameName, games] = lines[i].split(":");

    if( areGamesValid(games) ){
        runningTotal += parseInt(gameName.split(" ")[1]);
    }
}

console.log( runningTotal );

/*
Determines if a game is valid by checking the inputs versus the expected number of cubes.
The game value should contain a list of cubes revealed from the wily elf.
*/
function areGamesValid(games){

    let gameArray = games.split(";");
    let cubeCount = {
        "red": 12,
        "green": 13,
        "blue": 14
    };

    for( let i = 0; i < gameArray.length; i++ ){
        // Break the game down into each set of cubes, and check to see if any of them are invalid.
        let cubes = gameArray[i].trim().split(",");
        for( let c = 0; c < cubes.length; c++ ){
            let cubeData = cubes[c].trim().split(" ");
            if( cubeData[0] > cubeCount[ cubeData[1] ] ){
                // If the number of cubes is too high, exit with a false.
                return false;
            }
        }
    }
    return true;
}