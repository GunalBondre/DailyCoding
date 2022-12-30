const mPos = require('./missingPositive');
const mPos1 = require('./missingPositive1');

it('should return missing smallest positive', () => {
	expect(mPos([0, 2, 3])).toStrictEqual(1);
	expect(mPos1([0, 2, 3])).toStrictEqual(1);
});
