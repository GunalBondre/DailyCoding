const thirdMin = (arr) => {
	let min = 10000;
	let secondMin = 10000;
	let thirdMin = 10000;

	for (let i of arr) {
		if (i < min) {
			thirdMin = secondMin;
			secondMin = min;
			min = i;
		} else if (i < secondMin) {
			thirdMin = secondMin;
			secondMin = i;
		} else if (i < thirdMin) {
			thirdMin = i;
		}
	}
	return [min, secondMin, thirdMin];
};

console.log(thirdMin([4, 3, 6, 8, 1, 9]));
