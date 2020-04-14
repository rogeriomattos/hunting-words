const insertRandomLettersInBoard = require('../inserts/insertRandomLettersInBoard');
const insertWordsInBoard = require('../inserts/insertWordsInBoard');

function createBoard(rows, columns, words, options){

    let board = insertRandomLettersInBoard(rows, columns);

    board = insertWordsInBoard(board, words, options);

    return board;
}


module.exports = createBoard;