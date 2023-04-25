const revString = (str) => {
	if (str.length === 0) return '';
	return revString(str.substring(1)) + str.charAt(0);
};

console.log(revString('leetcode'));
