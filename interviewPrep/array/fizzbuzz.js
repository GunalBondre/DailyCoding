const fizzbuzz = (arr) => {
	let result = '';

	for (let element of arr) {
		let current = '';
		if (element % 3 == 0) {
			current += 'Fizz';
		}

		if (element % 5 == 0) {
			current += 'Buzz';
		}

		result += current || element;
		result += ' ';
	}
	return result.trim();
};

module.exports = fizzbuzz;
console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 30]));
