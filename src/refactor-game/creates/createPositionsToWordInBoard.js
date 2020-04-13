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
    
    console.log(directions);

    positions = random.getFunctions(directions)(word, rowMax, columnMax);
    
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

module.exports = createPositionsToWordInBoard;




