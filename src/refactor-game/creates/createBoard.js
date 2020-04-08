const alphabet = require("../utils/alphabet");
const getRandomInt = require("../utils/randomInt");
const createLetter = require('./createLetter');

function createBoard(rows, columns, words){

    initBoardWithRandomLetters = function(row, column){
        let board = [];
    
        for(let i = 0; i < row; i++){
            board.push([]);
    
            for(let j = 0; j < column; j++){
                let letter = alphabet[getRandomInt(0, alphabet.length-1)];
                board[i].push(new createLetter(letter, null, i, j));
            }
        }
    
        return board;
    }

    const board = initBoardWithRandomLetters(rows, columns);

    Array.prototype.push.apply(this, board);
}

module.exports = createBoard;