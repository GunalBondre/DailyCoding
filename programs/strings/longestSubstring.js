var lengthOfLongestSubstring = function (s) {
	let max = 0;
	let left = 0;
	let right = 0;
	let set = new Set();
	if (!s.length) return 0;

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

console.log(lengthOfLongestSubstring('pwwkew'));
