const randomInt = require('./randomInt');
const createLetter = require('./createLetter');

const direction = [
    "addWordHorizontal",
    "addWordVertical"
];

/**
 * @returns {Array<Array<string>>} board
 * @param {Array<string>} words
 * @param {Array<Array<string>>} board
 */
function wordsInBoard(words, board){
    for(let word of words){
        addWord[direction[randomInt(0,1)]](word, board);
    }

    return board;
}

const addWord = {
    addWordHorizontal : function (word, board){
        const {column, row} = getPositionHorizontal(board, word);
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let j = column; j < (word.length + column); j++){
            board[row][j] = createLetter(word[wordIndex].toUpperCase(), word, row, j);

            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    },

    addWordVertical : function (word, board){
        const {column, row} = getPositionVertical(board, word);
        let reverseWord = randomInt(0,1);

        let wordIndex = reverseWord ? word.length - 1 : 0;

        for(let i = row; i < (word.length + row); i++){
            board[i][column] = createLetter(word[wordIndex].toUpperCase(), word, i, column);

            wordIndex = reverseWord ? wordIndex - 1 : wordIndex + 1;
        }

        return board;
    }
}

function getPositionHorizontal(board, word){
    let initialColumnLimit =  ((board[0].length - 1) - word.length)+1;

    let row = randomInt(0, board.length-1);
    let column = randomInt(0, initialColumnLimit);

    let rangePosition = [];

    for(let index = 0; index < word.length;index++){
        rangePosition.push({"row": row, "column":column + index});
    }

    if(isPositionRepeated(rangePosition, board)){
        const newPosition = getPositionHorizontal(board, word);
        column = newPosition.column;
        row = newPosition.row;
    }

    return {column, row};
}

function getPositionVertical(board, word){
    let initialRowLimit =  ((board.length - 1) - word.length)+1;

    let row = randomInt(0, initialRowLimit);
    let column = randomInt(0, board[0].length - 1);

    let rangePosition = [];

    for(let index = 0; index < word.length;index++){
        rangePosition.push({"row": row + index, "column":column});
    }


    if(isPositionRepeated(rangePosition, board)){
        const newPosition = getPositionVertical(board, word);
        column = newPosition.column;
        row = newPosition.row;
    }


    return {column, row};
}

function isPositionRepeated(rangePosition, board){

    let positionsWithWords = [];

    board.forEach((item)=>{
        let wordsPositions = item.filter((el)=>{return el.word});
        if(wordsPositions.length > 0){
            positionsWithWords = positionsWithWords.concat(wordsPositions);
        }
    });

    for(let i = 0; i < positionsWithWords.length; i++){
        for(let index = 0; index < rangePosition.length; index++)
            if(positionsWithWords[i].row == rangePosition[index].row)
                if(positionsWithWords[i].column == rangePosition[index].column)
                    return true;
    }

    return false;
}
module.exports = { wordsInBoard };