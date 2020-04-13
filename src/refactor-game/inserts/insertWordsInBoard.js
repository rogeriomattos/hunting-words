const createPositionsToWordInBoard = require('../creates/createPositionsToWordInBoard');

function insertWordsInBoard(board, words, options){

    for(let word of words){
        let positions = createPositionsToWordInBoard(word, board, options);
        
        let wordIndex = 0;
        
        for(const {row, column} of positions){
            console.log("row: " + row);
            console.log("column: " + column);
            board[row][column].addNewWord(word);
            board[row][column].setLetter(word[wordIndex]);
            
            wordIndex++;
        }
    }

    return board;
}

module.exports = insertWordsInBoard;
