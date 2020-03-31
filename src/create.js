const populateLetter = require('./populateLetter');
const insert = require('./insert');

/**
 * 
 * @param {Array<string>} words 
 * @param {number} row 
 * @param {number} column 
 * @returns Array<Array<string>>
 */
function create(words, row, column){
    
    let huntWordBoard = [];
    
    if(row&&column){ 
        huntWordBoard = populateLetter(row,column)
    }
    else{
        let longestLength  = words.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
        huntWordBoard = populateLetter(longestLength+10, longestLength+10);
    }

    huntWordBoard = insert.wordsInBoard(words, huntWordBoard);

    return huntWordBoard;
}
// create([
//     "Rogerio",
//     "Mattos", 
//     "Almeida",
//     "Eunice",
//     "Merilyn",
//     "Silva",
//     "Souza"
// ]);
console.log(create([
    "Rogerio",
    "Mattos", 
    "Almeida",
    "Eunice",
    "Merilyn",
    "Silva",
    "Souza"
]));

module.exports = {create};