const secondMin = (arr) => {
	let min = arr[0];
	let secondMin = arr[0];

	for (let i of arr) {
		if (i < min) {
			secondMin = min;
			min = i;
		} else if (i < secondMin && i !== min) {
			secondMin = i;
		}
	}

	return secondMin;
};

console.log(secondMin([4, 3, 11, 43, 22, 1]));
