var largestNumber = function (nums) {
	const numString = nums.map((num) => num.toString());

	const compare = (a, b) => {
		const ab = a + b;
		const ba = b + a;
		return ba.localeCompare(ab);
	};

	numString.sort(compare);

	if (numString[0] === '0') {
		return '0';
	}

	// Concatenate the sorted strings and return the result
	return numString.join('');
};

console.log(largestNumber([3, 30, 34, 5, 9]));
