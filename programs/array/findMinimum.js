const findmin = (arr) => {
	let min = 999999;

	for (let i of arr) {
		if (i < min) {
			min = i;
		}
	}
	return min;
};

console.log(findmin([3, 4, 5, 1, 2, 44, 55, 23, 11]));
