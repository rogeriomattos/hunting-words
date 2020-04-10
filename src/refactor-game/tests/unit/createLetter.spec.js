const createLetter = require('../../creates/createLetter')

describe('Create Letter', () => {
    it('should be object', () => {
        const letter = new createLetter('m', null, 0, 0); 
        expect(typeof letter).toBe('object');
    });

    it('Have property "letter" with the value equal "m"', () => {
        const letter = new createLetter('m', null, 0, 0); 
        expect(letter).toHaveProperty('letter', 'm');
    });

    it('Have property "word" with the value equal null', () => {
        const letter = new createLetter('m', null, 0, 0); 
        expect(letter).toHaveProperty('word', []);
    });

    it('Have property "word" with the value equal "Afonso"', () => {
        const letter = new createLetter('A', 'Afonso', 0, 0); 
        expect(letter).toHaveProperty('word', ['Afonso']);
    });

    it('Have property "row" with the value equal 2', () => {
        const letter = new createLetter('A', 'Afonso', 2, 0); 
        expect(letter).toHaveProperty('row', 2);
    });

    it('Have property "column" with the value equal 4', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4); 
        expect(letter).toHaveProperty('column', 4);
    });
    it('Have property "isSelected" with the value equal 4', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4); 

        expect(letter).toHaveProperty('isSelected', false);
    });
});

describe('Test letter sets', () => {

    it('Have property "column" with value 10', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4);
        
        letter.setColumn(10);

        expect(letter.column).toBe(10);
    });

    it('Have property "row" with value 10', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4);
        
        letter.setRow(10);

        expect(letter.row).toBe(10);
    });

    it('Have property "isSelected" with value true', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4);
        
        letter.setIsSelected(true);

        expect(letter.isSelected).toBe(true);
    });

    it('Have property "letter" with value "X"', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4);
        
        letter.setLetter("X");
    
        expect(letter.letter).toBe('X');
    });

});

describe('CreateLetter test function addNewWord', () => {
    it('Have property "word" with the value equal ["Afonso", "Alex"]', () => {
        const letter = new createLetter('A', 'Afonso', 0, 4); 
        letter.addNewWord('Alex');

        expect(letter).toHaveProperty('word', ['Afonso', 'Alex']);
    });
});