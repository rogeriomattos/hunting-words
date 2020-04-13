const createPositionsToWordInBoard = require('../creates/createPositionsToWordInBoard');

function insertWordsInBoard(board, words, options){

    for(let word of words){
        let positions = createPositionsToWordInBoard(word, board, options);
        
        let wordIndex = 0;
        
        for(const {row, column, letter} of positions){
            
            board[row][column].addNewWord(word);
            board[row][column].setLetter(letter);
            
            wordIndex++;
        }
    }

    return board;
}

module.exports = insertWordsInBoard;
