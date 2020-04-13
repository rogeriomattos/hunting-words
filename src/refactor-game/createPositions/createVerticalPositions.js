const random = require('../utils/random');

function createVerticalPositions(word, rowMax, columnMax, inverseWord){
    let positions = [];
    
    let row = random.getInt(0, (rowMax - word.length) - 1);
    let column = random.getInt(0, columnMax - 1);

    let wordIndex = inverseWord ? word.length - 1 : 0;

    for(let i = 0; i < word.length; i++){
        positions.push({ row, column, letter: word[wordIndex]});
        row++;

        wordIndex = inverseWord ? wordIndex - 1 : wordIndex + 1;
    }

    return positions;
}

module.exports = createVerticalPositions;