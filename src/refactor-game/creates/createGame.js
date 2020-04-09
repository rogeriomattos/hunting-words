const createBoard = require('./createBoard');

function createGame(rows, columns, words){
    this.board = new createBoard(rows, columns, words);
    this.words = words;
    this.rows = rows;
    this.columns = columns;
}

let game = new createGame(30, 40, ["teste", "teste"]);

console.log(game);






