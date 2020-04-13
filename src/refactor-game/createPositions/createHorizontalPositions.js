const random = require('../utils/random');

function createHorizontalPositions(word, rowMax, columnMax){
    let positions = [];

    let row = random.getInt(0, rowMax - 1);
    let column = random.getInt(0, (columnMax - word.length) - 1);

    for(let i = 0; i < word.length; i++){
        positions.push({ row, column });
        column++;
    }

    return positions;
}

module.exports = createHorizontalPositions;