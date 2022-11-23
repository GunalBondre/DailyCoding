// Given an array nums of integers, return how many of them contain an even number of digits.

const evenDigits = (nums) => {
	let count = 0;
	for (let i of nums) {
		if (countDigits(i) % 2 === 0) count++;
	}
	return count;
};

const countDigits = (number) => {
	let count = 0;
	while (number > 0) {
		number = parseInt(number / 10);
		count++;
	}
	return count;
};

module.exports = evenDigits;
