const sortSentence = (s) => {
	let ans = '';
	let sortedStr = s
		.split(' ')
		.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

	for (let i in sortedStr) {
		ans += sortedStr[i].slice(0, sortedStr[i].length - 1) + ' ';
	}
	return ans.trim();
};

console.log(sortSentence('is2 sentence4 This1 a3'));
