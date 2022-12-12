const maxNumberWord = (sentence) => {
	let arr = [];
	let max = 0;
	for (let i in sentence) {
		arr.push(sentence[i].split(' '));
	}
	for (let i in arr) {
		max = Math.max(max, arr[i].length);
	}
	return max;
};

console.log(
	maxNumberWord([
		'alice and bob love leetcode',
		'i think so too',
		'this is great thanks very much',
	])
);
