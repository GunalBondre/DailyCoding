const max1 = (arr) => {
	let count = 0;
	let max = 0;

	for (let i in arr) {
		if (arr[i] === 1) {
			count++;
			max = Math.max(count, max);
		} else {
			count = 0;
		}
	}
	return max;
};

console.log(max1([1, 0, 1, 1, 0, 1]));
