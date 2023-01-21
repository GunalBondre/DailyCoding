const pivoteIndex = (arr) => {
	let sum = 0;
	let leftSum = 0;

	for (let i in arr) {
		sum += arr[i];
	}

	for (let i in arr) {
		sum -= arr[i];

		if (leftSum === sum) {
			return i;
		}

		leftSum += arr[i];
	}
	return -1;
};

console.log(pivoteIndex([1, 7, 3, 6, 5, 6]));

// sum = 27 - 7 = 20 -3 = 17 -6 =11
// sum1 = 1 + 7 = 8 + 3 = 11
