function createLetter(letter, word, row, column){
    return{
        'letter': letter,
        'word': word,
        'selected': false,
        'row': row,
        'column': column
    };
}

module.exports = createLetter;