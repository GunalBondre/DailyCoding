var longestSubstring = function (s, k) {
	let windowStart = 0;
	let windowEnd = 0;
	let map = new Map();
	let counter = 0;
	let count = 0;

	while (windowEnd < s.length) {
		if (!map.has(s[windowEnd])) {
			map.set(s[windowEnd++]);
			counter++;
		} else {
			map.delete(s[windowStart++]);
			count++;
		}
	}

	console.log(counter, count);
};

console.log(longestSubstring('ababbc', 2));
