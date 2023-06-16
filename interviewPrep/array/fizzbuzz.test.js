const fizzbuzz = require('./fizzbuzz');

describe('function should return', () => {
	it('should append fizz if number is divisible by 3', () => {
		let result = fizzbuzz([1, 2, 3, 4, 5, 6]);

		expect(result).toStrictEqual('1 2 Fizz 4 Buzz Fizz');
	});
});
