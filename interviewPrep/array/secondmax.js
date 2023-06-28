const secondmax = (ar) => {
	let result = {};
	for (let num of ar) {
		result[num] = result[num] + 1 || 1;
	}

	let max = 0;
	let secondmx = 0;
	let thirdmax = 0;
	for (let key in result) {
		if (result[key] > max) {
			secondmx = max;
			max = result[key];
		} else if (result[key] > secondmx && result[key] < max) {
			thirdmax = secondmx;
			secondmx = result[key];
		} else {
			thirdmax = result[key];
		}
	}

	let count = 0;
	for (let key in result) {
		if (result[key] == thirdmax) {
			count++;
		}
	}

	return count;
};

console.log(secondmax([1, 1, 1, 2, 2, 3, 4, 5, 6]));
