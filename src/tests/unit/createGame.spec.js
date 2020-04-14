const createGame = require('../../creates/createGame');

describe('Create Game', () => {
    it('should be object', () => {
        const game = new createGame(10, 10, ["Rogerio", "Almeida", "Mattos"]); 
        
        expect(typeof game).toBe('object');
    });
});