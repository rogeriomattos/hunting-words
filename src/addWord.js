const createLetter = require('./createLetter');
const position = require('./position');
const randomInt = require('./randomInt');

const addWord = {
    horizontal : function (word, board){
        const {column, row} = position.getHorizontal(board, word);
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let j = column; j < (word.length + column); j++){
            board[row][j] = createLetter(word[wordIndex].toUpperCase(), word, row, j);

            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    },

    vertical : function (word, board){
        const {column, row} = position.getVertical(board, word);
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let i = row; i < (word.length + row); i++){
            board[i][column] = createLetter(word[wordIndex].toUpperCase(), word, i, column);

            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    },

    diagonalRight: function (word, board){
        const {column, row} = position.getDiagonalRight(board, word);

        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let i = 0; i < word.length; i++){
            board[row + i][column + i] = createLetter(word[wordIndex].toUpperCase(), word, row + i, column + i);
            
            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }
        
        return board;
    },

    diagonalLeft: function (word, board){
        const {column, row} = position.getDiagonalLeft(board, word);

        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let i = 0; i < word.length; i++){
            board[row + i][column - i] = createLetter(word[wordIndex].toUpperCase(), word, row + i, column - i);
            
            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }
        
        return board;
    }

}

module.exports = addWord;