const findOccurance = (heystack, needle) => {
	let windowSize = 0;
	let start = 0;
	let end = 0;
	let answer = [];

	while (windowSize < needle.length) {
		windowSize++;
		end++;
	}

	while (start < heystack.length) {
		let substring = heystack.substring(start, end);
		if (findMatch(needle, substring)) {
			answer.push(start);
			start++;
			end++;
		} else {
			start++;
			end++;
		}
	}
	return answer.length ? answer : -1;
};

const findMatch = (needle, substr) => {
	return needle === substr;
};

console.log(findOccurance('codingisfunis', 'is'));
