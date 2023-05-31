const maxSubarr = (arr, k) => {
	let start = 0;
	let end = 0;
	let max = arr[0];
	let sum = 0;
	let windowSize = 0;

	while (windowSize < k) {
		windowSize++;
	}

	for (let i = start; i < windowSize; i++) {
		sum += arr[i];
		let avg = sum / k;
	}
	console.log(sum, windowSize);
};

console.log(maxSubarr([1, 12, -5, -6, 50, 3], 4));
