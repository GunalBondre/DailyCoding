const findMax = (arr) => {
	let max = arr[0];

	for (let i of arr) {
		if (i > max) {
			max = i;
		}
	}
	return max;
};

console.log(findMax([1, 4, 3, 6, 2, 77, 55, 443]));
