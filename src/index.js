import alphabet from './alphabet';
import getRandomInt from './randomInt';

const orientation = [
    "addWordHorizontal",
    "addWordVertical"
];

/**
 * 
 * @param {Array<string>} words 
 * @returns Array<Array<string>>
 */
function create(words){
    
    let huntWordBoard = populateLetter(20, 20);

    huntWordBoard = addWordsInBoard(words, huntWordBoard);

    return huntWordBoard;
}

/**
 * @returns {string[][]} board[][]
 * @param {number} row 
 * @param {number} column 
 */
function populateLetter(row, column){
    let huntWordBoard = [];
    
    for(let i = 0; i < row; i++){
        huntWordBoard.push([]);
        
        for(let j = 0; j < column; j++)
            huntWordBoard[i].push(alphabet[getRandomInt(0, alphabet.length-1)]);
    }

    return huntWordBoard;
}

/**
 * @returns {Array<Array<string>>} board
 * @param {Array<string>} words 
 * @param {Array<Array<string>>} board 
 */
function addWordsInBoard(words, board){

    for(let word of words){
        console.log(word);
        console.log(addWord[orientation[0]](word, board));
    }

    return board;
}

const addWord = {
    addWordHorizontal : function (word, board){
        for(let row = 0; row < board.length; row++){
            let wordIndex = 0;
            for(let column = 0; column < word.length; column++){
                board[row][column] = word[wordIndex];
                wordIndex++;
            }
        }
        return board;
    },

    addWordVertical : function (word, board){
        
        return board;
    }
}

export default {create};