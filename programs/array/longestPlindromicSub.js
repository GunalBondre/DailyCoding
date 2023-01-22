var longestPalindrome = function (s) {
	let left = 0;
	let right = 1;
	let windowSize = 0;
	let max = 0;
	let res = [];
	let newStr = [...s];
	let set = new Set(newStr);
	if (set.size === 1) return s;
	if (s.length === 1) {
		return s[0];
	}
	while (right < s.length) {
		let sub = s.substring(left, right + 1);
		if (!isPalindrom(sub)) {
			right++;
			windowSize++;
			if (right === s.length) {
				left++;
				right = left + 1;
			}
		} else if (isPalindrom(sub)) {
			res.push(sub);
			if (right !== s.length - 1) {
				right++;
			} else {
				left++;
				right = left + 1;
			}
		}
	}

	for (let i in res) {
		console.log(res[i].length);
		max = Math.max(max, res[i].length);
	}
	for (let i in res) {
		if (max === res[i].length) return res[i];
	}

	return s[0];
};

const isPalindrom = (str) => {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};

console.log(longestPalindrome('babad'));
