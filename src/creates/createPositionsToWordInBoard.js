const random = require('../utils/random');
const createVerticalPositions = require('../createPositions/createVerticalPositions');
const createHorizontalPositions = require('../createPositions/createHorizontalPositions');
const createDiagonalRightPositions = require('../createPositions/createDiagonalRightPositions');
const createDiagonalLeftPositions = require('../createPositions/createDiagonalLeftPositions');

function createPositionsToWordInBoard(word, board, options){
    let positions = [];
    
    const rowMax = board.length;
    const columnMax = board[0].length;
    
    const directions = directionsPositions(options);
    
    positions = random.getFunctions(directions)(word, rowMax, columnMax, options.inverseWord);
    
    if(isPositionRepeated(positions, board, options.wordsCross))
        positions = createPositionsToWordInBoard(word, board, options);

    return positions;
}

function directionsPositions({wordInVertical, wordInHorizontal, wordDiagonalLeft, wordDiagonalRight}){
    let directions = [];
    
    if(wordInVertical)
        directions.push(createVerticalPositions);
    
    if(wordInHorizontal)
        directions.push(createHorizontalPositions);
    
    if(wordDiagonalLeft)
        directions.push(createDiagonalLeftPositions);
    
    if(wordDiagonalRight)
        directions.push(createDiagonalRightPositions);
    
    return directions;
}

function isPositionRepeated(positions, board, wordsCross){
    
    for({row, column, letter} of positions){
        if(wordsCross)
            if(board[row][column].word.length > 0 && board[row][column].letter != letter)
                return true;
        else
            if(board[row][column].word.length > 0)
                return true;
    }
    
    return false;
}

module.exports = createPositionsToWordInBoard;




