const longestSubstring = (s) => {
	let left = 0;
	let right = 0;
	let max = 0;
	let set = new Set();

	while (right < s.length) {
		if (!set.has(s[right])) {
			set.add(s[right++]);
			max = Math.max(max, set.size);
		} else {
			set.delete(s[left++]);
		}
	}
	return max;
};

console.log(longestSubstring('bbbbb'));
