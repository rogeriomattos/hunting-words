const createBoard = require('../../creates/createBoard');

describe('Create Game', () => {
    it('should be object', () => {
        const board = new createBoard(10, 10, ["Rogerio", "Almeida", "Mattos"]); 
        
        expect(typeof board).toBe('object');
    });
});