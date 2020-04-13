function createLetter(letter, word, row, column){
    
    this.letter = letter.toUpperCase();
    this.word = (word)? [word] : [];
    this.row = row;
    this.column = column;
    this.isSelected = false;

    this.addNewWord = function(word){
        this.word.push(word);
    }

    this.setLetter = function(letter){
        this.letter = letter.toUpperCase();
    }

    this.setRow = function(row){
        this.row = row;
    }

    this.setColumn = function(column){
        this.column = column;
    }

    this.setIsSelected = function(isSelected){
        this.isSelected = isSelected;
    }

}

module.exports = createLetter;