var maxSubArray = function (nums) {
	let currSum = 0;
	let max = nums[0];

	for (let i in nums) {
		if (currSum < 0) currSum = 0;
		currSum += nums[i];

		max = Math.max(currSum, max);
	}
	return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
