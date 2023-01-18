var maxSubArray = function (nums, k) {
	let windowStart = 0;
	let windowEnd = 0;
	let max = -Infinity;
	let sum = 0;
	let average = 0;
	while (windowEnd < nums.length) {
		sum += nums[windowEnd];
		average = sum / k;

		if (windowEnd - windowStart + 1 !== k) {
			windowEnd++;
		} else if (windowEnd - windowStart + 1 === k) {
			sum -= nums[windowStart];
			max = Math.max(average, max);
			windowStart++;
			windowEnd++;
		}
	}
	return max;
};

console.log(maxSubArray([-1], 1));
