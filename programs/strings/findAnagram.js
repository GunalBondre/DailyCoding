var findAnagrams = function (s, p) {
	let windowStart = 0;
	let windowEnd = 0;
	let count = [];
	let windowSize = 0;
	while (windowEnd <= s.length) {
		if (windowSize < p.length) {
			windowEnd++;
			windowSize++;
		} else if (windowSize === p.length) {
			let result = isAnagram(s.substring(windowStart, windowEnd), p);
			if (result === true) {
				count.push(windowStart);
			}
			windowStart++;
			windowEnd++;
		}
	}
	return count;
};

const isAnagram = (str, p) => {
	let hash = {};
	for (let i in p) {
		hash[p[i]] = hash[p[i]] + 1 || 1;
	}
	for (let i in str) {
		if (hash[str[i]]) {
			hash[str[i]] -= 1;
		} else return false;
	}
	return true;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
// console.log(isAnagram('bca', 'abc'));
