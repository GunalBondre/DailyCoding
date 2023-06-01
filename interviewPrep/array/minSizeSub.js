const minArr = (arr, target) => {
	let windowStart = 0;
	let windowEnd = 0;
	let min = Infinity;
	let sum = 0;

	while (windowEnd < arr.length) {
		sum += arr[windowEnd];
		if (sum < target) {
			windowEnd++;
		} else if (sum >= target) {
			sum -= arr[windowStart];
			min = Math.min(min, windowEnd - windowStart + 1);
			sum = 0;
			windowStart++;
			windowEnd = windowStart;
		}
	}
	return min === Infinity ? 0 : min;
};

console.log(minArr([2, 3, 1, 2, 4, 3], 7));
