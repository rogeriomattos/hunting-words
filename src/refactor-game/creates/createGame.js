const createBoard = require('./createBoard');


/**
 * 
 * @param {number} rows 
 * @param {number} columns 
 * @param {Array<string>} words 
 * @param {object{wordsCross:boolen, inverseWord:boolean, wordInVertical:boolean, wordInHorizontal:boolean, wordDiagonalLeft: boolen, wordDiagonalRight: boolen}} options 
 */
function createGame(rows, columns, words, options){
    options = {
        wordsCross: (!options || options.wordsCross != false), 
        inverseWord: (!options || options.inverseWord != false), 
        wordInVertical: (!options || options.wordInVertical != false), 
        wordInHorizontal: (!options || options.wordInHorizontal != false),  
        wordDiagonalLeft: (!options || options.wordDiagonalLeft != false),  
        wordDiagonalRight: (!options || options.wordDiagonalRight != false) 
    };

    this.board = new createBoard(rows, columns, words);
    this.words = words;
    this.rows = rows;
    this.columns = columns;
}

let game = new createGame(30, 40, ["teste", "Rogerio", "Palavra"], {});

//console.log(game);

//console.log(game.board[0][8]);

module.exports = createGame;






