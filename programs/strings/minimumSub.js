var minSubArrayLen = function (target, nums) {
	let windowStart = 0;
	let windowEnd = 0;
	let sum = 0;
	let min = Infinity;
	while (windowEnd < nums.length) {
		sum += nums[windowEnd++];
		while (sum >= target) {
			min = Math.min(min, windowEnd - windowStart);
			sum -= nums[windowStart++];
		}
	}
	return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
