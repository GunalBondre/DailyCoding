const evenDigit = require('./evenDigits');

it('should find the even digits from list of numbers in array', () => {
	expect(evenDigit([12, 222, 45, 13456])).toBe(2);
});
