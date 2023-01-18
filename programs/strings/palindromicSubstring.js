const palindromicSubstring = (str) => {
	let left = 0;
	let right = 0;
	let pal = [];
	let set = new Set();

	while (right <= str.length) {
		if (!set.has(str[right])) {
			set.add(str[right]);
			pal.push(str[right]);
			right++;
		} else {
		}
	}
};

const palindrome = (str) => {
	let rev = '';

	for (let i = str.length - 1; i >= 0; i++) {
		rev += str[i];
	}

	return str === rev;
};

console.log(palindromicSubstring('babad'));
