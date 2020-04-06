const isPositionRepeated = require('./isPositionRepeated');
const randomInt = require('./randomInt');

const position = {
    
    getHorizontal : (board, word) =>{
        let initialColumnLimit =  ((board[0].length - 1) - word.length)+1;

        let row = randomInt(0, board.length-1);
        let column = randomInt(0, initialColumnLimit);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"row": row, "column":column + index});
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getHorizontal(board, word);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getVertical : (board, word) => {
        let initialRowLimit =  ((board.length - 1) - word.length)+1;

        let row = randomInt(0, initialRowLimit);
        let column = randomInt(0, board[0].length - 1);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"row": row + index, "column":column});
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getVertical(board, word);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getDiagonalRight : (board, word) => {
        let initialRowLimit =  ((board.length - 1) - word.length)+1;
        let initialColumnLimit =  ((board[0].length - 1) - word.length)+1;

        let row = randomInt(0, initialRowLimit);
        let column = randomInt(0, initialColumnLimit);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"row": row + index, "column": column + index});
        }

        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getDiagonalRight(board, word);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    },

    getDiagonalLeft : (board, word) => {
        let initialRowLimit =  ((board.length - 1) - word.length)+1;
        let initialColumnLimit =  (word.length)+1;
        
        let row = randomInt(0, initialRowLimit);
        let column = randomInt(initialColumnLimit, board[0].length);

        let rangePosition = [];

        for(let index = 0; index < word.length;index++){
            rangePosition.push({"row": row + index, "column": column - index});
        }
        
        if(isPositionRepeated(rangePosition, board)){
            const newPosition = position.getDiagonalLeft(board, word);
            column = newPosition.column;
            row = newPosition.row;
        }

        return {column, row};
    }
}

module.exports = position;