var reverseWords = function (s) {
	let rev = '';
	let arr = [];

	for (let i = s.length - 1; i >= 0; i--) {
		rev += s[i];
	}
	let ans = rev.split(' ').reverse().join(' ');
	return ans;
};

console.log(reverseWords("Let's take LeetCode contest"));
