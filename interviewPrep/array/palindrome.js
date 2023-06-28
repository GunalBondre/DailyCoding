let startIdx,
	maxLength = 0;

var longestPalindrome = function (s) {
	let length = s.length - 1;
	if (length < 2) return s;

	for (let center = 0; center < length; center++) {
		expandAroundCenter(s, center, center);
		expandAroundCenter(s, center, center + 1);
	}

	return s.substring(startIdx, startIdx + maxLength);
};

const expandAroundCenter = (s, left, right) => {
	while (
		left >= 0 &&
		right <= s.length - 1 &&
		s.charAt(left) == s.charAt(right)
	) {
		left--;
		right++;
	}

	if (maxLength < right - left - 1) {
		startIdx = left + 1;
		maxLength = right - left - 1;
	}
};

console.log(longestPalindrome('abccbd'));
