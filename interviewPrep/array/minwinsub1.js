const minWinSub = (s1, s2) => {
	if (s2.length > s1.length) return '';

	let charCount = {};
	let missingchar = s2.length;
	let min = Infinity;
	let minimumsub = '';

	for (let char of s2) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	let left = 0;
	let right = 0;
	while (right < s1.length) {
		let rightChar = s1[right];

		if (charCount[rightChar] !== undefined) {
			if (charCount[rightChar] > 0) {
				missingchar--;
			}
			charCount[rightChar]--;
		}

		right++;
	}
	while (missingchar === 0) {
		if (right - left < min) {
			min = right - left;
			minimumsub = s1.substring(left, right);
		}

		let leftChar = s1[left];
		if (charCount[leftChar] !== undefined) {
			if (charCount[leftChar] === 0) {
				missingcharmemo++;
			}
			charCount[leftChar]++;
		}

		left++;
	}
	return minimumsub;
};

console.log(minWinSub('ADOCABANC', 'ABC'));
