const random = require('../utils/random');

function createHorizontalPositions(word, rowMax, columnMax, inverseWord){
    let positions = [];

    let row = random.getInt(0, rowMax - 1);
    let column = random.getInt(0, (columnMax - word.length) - 1);

    let wordIndex = inverseWord ? word.length - 1 : 0;

    for(let i = 0; i < word.length; i++){
        positions.push({ row, column, letter: word[wordIndex] });
        column++;
        
        wordIndex = inverseWord ? wordIndex - 1 : wordIndex + 1;
    }

    return positions;
}

module.exports = createHorizontalPositions;