var strStr = function (haystack, needle) {
	let windowSize = 0;
	let start = 0;

	while (windowSize < needle.length) {
		windowSize++;
	}
	while (start < haystack.length) {
		let substr = haystack.substr(start, windowSize);
		if (findOccuranceIndex(substr, needle)) {
			return start;
		} else {
			start++;
		}
	}
	return -1;
};
const findOccuranceIndex = (substr, needle) => {
	return substr === needle;
};

console.log(strStr('sadbutsad', 'but'));
