const bsellstock = (arr) => {
	let max = 0;
	let start = 0;
	let end = 1;
	let currentMax = 0;

	while (end < arr.length) {
		currentMax = arr[end] - arr[start];
		if (currentMax < 0) {
			start = end;
		} else {
			max = Math.max(max, currentMax);
		}
		end += 1;
	}
	return max;
};

console.log(bsellstock([7, 1, 5, 3, 6, 4]));
