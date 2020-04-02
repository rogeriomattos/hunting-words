const alphabet = require('./alphabet');
const getRandomInt =  require('./randomInt');
const createLetter = require('./createLetter');

/**
 * @returns {string[][]} board[][]
 * @param {number} row
 * @param {number} column
 */
function populateLetter(row, column){
    let huntWordBoard = [];

    for(let i = 0; i < row; i++){
        huntWordBoard.push([]);

        for(let j = 0; j < column; j++){
            let letter = alphabet[getRandomInt(0, alphabet.length-1)];
            huntWordBoard[i].push(createLetter(letter, null, i, j));
        }
    }

    return huntWordBoard;
}

module.exports = populateLetter;