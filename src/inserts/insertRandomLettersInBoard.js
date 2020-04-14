const alphabet = require("../utils/alphabet");
const random = require("../utils/random");
const createLetter = require('../creates/createLetter');

function initBoardWithRandomLetters(rows, columns) {
    let board = [];

    for(let i = 0; i < rows; i++){
        let boardRow = [];

        for(let j = 0; j < columns; j++){
            let letter = random.getString(alphabet);

            boardRow.push(new createLetter(letter, null, i, j));
        }

        board.push(boardRow);
    }

    return board;
}

module.exports = initBoardWithRandomLetters;