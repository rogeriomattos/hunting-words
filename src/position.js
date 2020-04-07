const isPositionRepeated = require('./isPositionRepeated');
const randomInt = require('./randomInt');

const position = {
    
    getHorizontal : (board, word, wordIndex) =>{
        let internalWordIndex = wordIndex;
        let reverseWord = internalWordIndex == word.length - 1;
        let initialColumnLimit =  ((board[0].length - 1) - word.length)+1;

        let row = randomInt(0, board.length-1);
        let column = randomInt(0, initialColumnLimit);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"letter":word[wordIndex],"row": row, "column":column + index});
            internalWordIndex = reverseWord ? internalWordIndex - 1 : internalWordIndex + 1;
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getHorizontal(board, word, wordIndex);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getVertical : (board, word, wordIndex) => {
        let internalWordIndex = wordIndex;
        let reverseWord = internalWordIndex == word.length - 1;
        let initialRowLimit =  ((board.length - 1) - word.length)+1;

        let row = randomInt(0, initialRowLimit);
        let column = randomInt(0, board[0].length - 1);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"letter":word[internalWordIndex],"row": row + index, "column":column});
            internalWordIndex = reverseWord ? internalWordIndex - 1 : internalWordIndex + 1;
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getVertical(board, word, wordIndex);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getDiagonalRight : (board, word, wordIndex) => {
        let internalWordIndex = wordIndex;
        let reverseWord = internalWordIndex == word.length - 1;
        let initialRowLimit =  ((board.length - 1) - word.length)+1;
        let initialColumnLimit =  ((board[0].length - 1) - word.length)+1;

        let row = randomInt(0, initialRowLimit);
        let column = randomInt(0, initialColumnLimit);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"letter":word[internalWordIndex],"row": row + index, "column": column + index});
            internalWordIndex = reverseWord ? internalWordIndex - 1 : internalWordIndex + 1;
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getDiagonalRight(board, word, wordIndex);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getDiagonalLeft : (board, word, wordIndex) => {
        let internalWordIndex = wordIndex;
        let reverseWord = internalWordIndex == word.length - 1;
        let initialRowLimit =  ((board.length - 1) - word.length)+1;
        let initialColumnLimit =  (word.length)+1;
        
        let row = randomInt(0, initialRowLimit);
        let column = randomInt(initialColumnLimit, board[0].length);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"letter":word[wordIndex],"row": row + index, "column": column - index});
            internalWordIndex = reverseWord ? internalWordIndex - 1 : internalWordIndex + 1;
        }
        
        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getDiagonalLeft(board, word, wordIndex);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    }
}

module.exports = position;