const insertRandomLettersInBoard = require('../inserts/insertRandomLettersInBoard');

function createBoard(rows, columns, words){

    const board = insertRandomLettersInBoard(rows, columns);

    return board;
}


module.exports = createBoard;