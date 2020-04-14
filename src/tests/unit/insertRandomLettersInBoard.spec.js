const insertRandomLettersInBoard = require('../../inserts/insertRandomLettersInBoard');

describe('Insert Random Letters In Board', () => {
    it('should be object', () => {
        const board = insertRandomLettersInBoard(10, 10); 
        
        expect(typeof board).toBe('object');
    });

    it('should to have 10 rows', () => {
        const board = insertRandomLettersInBoard(10, 10); 
        
        expect(board.length).toBe(10);
    });

    it('should to have 10 columns', () => {
        const board = insertRandomLettersInBoard(10, 10); 
        
        for(let row of board){
            expect(row.length).toBe(10);
        }
    });
});