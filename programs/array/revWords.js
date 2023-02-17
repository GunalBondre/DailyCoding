var reverseWords = function (str) {
	let strArr = str.split(' ');
	let rev = '';
	for (let i = strArr.length - 1; i >= 0; i--) {
		if (strArr[i] !== '') {
			rev += strArr[i] + ' ';
		}
	}
	return rev.trim();
};

console.log(reverseWords('a good   example'));
