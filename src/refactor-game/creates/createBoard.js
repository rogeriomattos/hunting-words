const alphabet = require("../utils/alphabet");
const random = require("../utils/random");
const createLetter = require('./createLetter');

function createBoard(rows, columns, words){

    initBoardWithRandomLetters = function(){
        let board = [];
    
        for(let i = 0; i < rows; i++){
            board.push([]);
    
            for(let j = 0; j < columns; j++){
                let letter = random.getString(alphabet);

                board[i].push(new createLetter(letter, null, i, j));
            }
        }
    
        return board;
    }

    const board = initBoardWithRandomLetters();

    Array.prototype.push.apply(this, board);
}

module.exports = createBoard;