const createLetter = require('../../src/createLetter')
describe('Create Letter', () => {
    it('should be onbject', () => {
        const letter = createLetter('m', null, 0, 0); 
        expect(typeof letter).toBe('object');
    });

    it('Have property "letter" with the value equal "m"', () =>{
        const letter = createLetter('m', null, 0, 0); 
        expect(letter).toHaveProperty('letter', 'm');
    });

    it('Have property "word" with the value equal null', () =>{
        const letter = createLetter('m', null, 0, 0); 
        expect(letter).toHaveProperty('word', null);
    });

    it('Have property "word" with the value equal "Afonso"', () =>{
        const letter = createLetter('A', 'Afonso', 0, 0); 
        expect(letter).toHaveProperty('word', 'Afonso');
    });

    it('Have property "row" with the value equal 2', () =>{
        const letter = createLetter('A', 'Afonso', 2, 0); 
        expect(letter).toHaveProperty('row', 2);
    });

    it('Have property "column" with the value equal 4', () =>{
        const letter = createLetter('A', 'Afonso', 0, 4); 
        expect(letter).toHaveProperty('column', 4);
    });
});