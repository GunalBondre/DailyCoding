const MaxArea = require('./containerWithMostWater');

describe('maxArea', () => {
	it('should return the maximum area', () => {
		expect(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
	});

	it('should return the maximum area', () => {
		expect(MaxArea([1, 1])).toStrictEqual(1);
	});
});
