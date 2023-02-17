var letterCombinations = function (digits) {
	const result = [];

	let map = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};
	const computeStringCombination = (index, string) => {
		if (index === digits.length) {
			result.push(string);
			return;
		}

		for (const char of map[digits[index]]) {
			computeStringCombination(index + 1, string + char);
		}
	};

	computeStringCombination(0, '');
	return result;
};

console.log(letterCombinations('236'));
