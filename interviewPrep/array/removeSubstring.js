var minLength = function (s) {
	let arr = [];
	let i = 0;

	while (i < s.length) {
		if (
			(s[i] === 'A' && arr[arr.length - 1] === 'B') ||
			(s[i] === 'C' && arr[arr.length - 1] === 'D')
		) {
			arr.pop();
		} else {
			arr.push(s[i]);
		}
		return arr.length - 1;
	}
};

console.log(minLength('CCCCDDDD'));
