const randomInt = require('../../src/randomInt');
describe('Random Int', () => {

    it('returns should a number type', () => {
        const returns = randomInt(0, 10);

        expect(typeof returns).toBe('number');
    });

    it('should generate a number betwen 0 and 10', () => {
        const returns = randomInt(0, 10);

        expect(returns).toBeGreaterThanOrEqual(0);
        expect(returns).toBeLessThanOrEqual(10);
    });

    it('should generate a number betwen 4 and 5', () => {
        const returns = randomInt(4, 5);

        expect(returns).toBeGreaterThanOrEqual(4);
        expect(returns).toBeLessThanOrEqual(5);
    }); 
});