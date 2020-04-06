const randomInt = require('./randomInt');
const addWord = require('./addWord');

const direction = Object.getOwnPropertyNames(addWord);

/**
 * @returns {Array<Array<string>>} board
 * @param {Array<string>} words
 * @param {Array<Array<string>>} board
 */
function wordsInBoard(words, board){
    for(let word of words){
        addWord[direction[randomInt(0, direction.length - 1)]](word, board);
    }
    
    return board;
}

module.exports = { wordsInBoard };