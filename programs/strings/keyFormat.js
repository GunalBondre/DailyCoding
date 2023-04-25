// License Key Formatting
// Easy
// 930
// 1.3K
// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

// Example 1:

// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"
// Explanation: The string s has been split into two parts, each part has 4 characters.
// Note that the two

const licenseKey = (str, k) => {
	str = str.split('-');
	let arr = [];
	let count = 0;
	let res = '';
	let i = 0;
	while (i < str.length) {
		if (count < k) {
			res += str[i];
			count++;
			i++;
		}
		if (res.length === k) {
			arr.push(res);
			res = '';
			count = 0;
		} else if (res.length > k) {
			let newStr = res.substring(0, k);
			arr.push(newStr);
			res = res.slice(k);
		}
	}
	return arr.join('-');
};

console.log(licenseKey('2-4A0r7-4k', 4));
