const createBoard = require('./createBoard');

function createGame(rows, columns, words){
    this.board = new createBoard(rows, columns, words);
    this.words = words;
    this.rows = rows;
    this.columns = columns;

    this.selectLetter = function (row, column){
        
    }

    this.unSelectLetter = function (row, column){
        
    }
}

let test = new createGame(30, 40, ["teste", "teste"]);

console.log(test.board[0][0]);



