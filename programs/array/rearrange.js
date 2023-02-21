var sortSentence = function (s) {
	let ans = '';
	s = s.split(' ');
	let map = new Map();
	for (let i in s) {
		if (!map.has(s[i][s[i].length - 1])) {
			map.set(s[i][s[i].length - 1], s[i].slice(0, s[i].length - 1));
		}
	}
	let arr = [...map.entries()].sort((a, b) => a[0] - b[0]);
	console.log(arr);
	for (let i in arr) {
		ans += arr[i][arr[i].length - 1] + ' ';
	}
	return ans;
};

console.log(sortSentence('is2 sentence4 This1 a3'));
