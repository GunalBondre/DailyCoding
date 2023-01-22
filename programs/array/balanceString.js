/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let count = 0;
	let output = 0;

	for (let i in s) {
		if (s[i] === 'R') {
			count++;
		} else if (s[i] === 'L') {
			count--;
		}
		if (count === 0) {
			output++;
		}
	}

	return output;
};

console.log(balancedStringSplit('RLRRRLLRLL'));
