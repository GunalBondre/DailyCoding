var longestCommonPrefix = function (strs) {
	let sortedStr = strs.sort();

	let first = sortedStr[0];
	let last = sortedStr[sortedStr.length - 1];
	let start = 0;
	let count = 0;
	while (start < first.length) {
		if (first.charAt(start) === last.charAt(start)) {
			count++;
			start++;
		} else {
			break;
		}
	}
	return count;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
