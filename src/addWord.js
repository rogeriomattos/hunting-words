const createLetter = require('./createLetter');
const position = require('./position');
const randomInt = require('./randomInt');

const addWord = {
    horizontal : function (word, board){
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;
        
        const {column, row} = position.getHorizontal(board, word, wordIndex);

        for(let j = column; j < (word.length + column); j++){
            if(board[row][j].word != null){
                board[row][j].word = board[row][j].word+" | "+ word;
            }else{
                board[row][j] = createLetter(word[wordIndex].toUpperCase(), word, row, j);
            }
            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    },

    vertical : function (word, board){
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;
        
        const {column, row} = position.getVertical(board, word, wordIndex);

        for(let i = row; i < (word.length + row); i++){
            if(board[i][column].word != null){
                board[i][column].word = board[i][column].word+" | "+ word;
            }else
                board[i][column] = createLetter(word[wordIndex].toUpperCase(), word, i, column);

            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    },

    diagonalRight: function (word, board){
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;
        
        const {column, row} = position.getDiagonalRight(board, word, wordIndex);

        for(let i = 0; i < word.length; i++){
            if(board[row + i][column + i].word != null){
                board[row + i][column + i].word = board[row + i][column + i].word+" | "+ word;
            }else
                board[row + i][column + i] = createLetter(word[wordIndex].toUpperCase(), word, row + i, column + i);
            
            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }
        
        return board;
    },

    diagonalLeft: function (word, board){
        let reverseWord = randomInt(0,1);
        
        let wordIndex = reverseWord ? word.length - 1 : 0;
        
        const {column, row} = position.getDiagonalLeft(board, word, wordIndex);

        for(let i = 0; i < word.length; i++){
            if(board[row + i][column - i].word != null){
                board[row + i][column - i].word = board[row + i][column - i].word +" | "+ word;
            }else
                board[row + i][column - i] = createLetter(word[wordIndex].toUpperCase(), word, row + i, column - i);
            
            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }
        
        return board;
    }

}

module.exports = addWord;