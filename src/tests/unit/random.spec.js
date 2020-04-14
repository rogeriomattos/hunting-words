const random = require('../../utils/random');
describe('Random Get Int', () => {

    it('returns should a number type', () => {
        const randomNumber = random.getInt(0, 10);

        expect(typeof randomNumber).toBe('number');
    });

    it('should generate a number between 0 and 10', () => {
        const randomNumber = random.getInt(0, 10);

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });

    it('should generate a number between 4 and 5', () => {
        const randomNumber = random.getInt(4, 5);

        expect(randomNumber).toBeGreaterThanOrEqual(4);
        expect(randomNumber).toBeLessThanOrEqual(5);
    });
    
    it('should generate a number between 0 and 1', () => {
        const randomNumber = random.getInt(0, 1);

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(1);
    });

    it('should generate a number between -3 and -1', () => {
        const randomNumber = random.getInt(-3, -1);

        expect(randomNumber).toBeGreaterThanOrEqual(-3);
        expect(randomNumber).toBeLessThanOrEqual(-1);
    });
});