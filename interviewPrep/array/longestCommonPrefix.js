const logestPrefix = (arr) => {
	arr = arr.sort((a, b) => a - b);
	let first = arr[0];
	let last = arr[arr.length - 1];
	let count = 0;

	while (count < first.length) {
		if (first.charAt(count) === last.charAt(count)) {
			count++;
		} else {
			break;
		}
	}
	console.log(count);
	return first.substring(0, count);
};

console.log(logestPrefix(['flower', 'flow', 'flight']));
