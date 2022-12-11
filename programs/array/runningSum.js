var runningSum = function (nums) {
	let sum = 0;
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};

console.log(runningSum([1, 2, 3, 4]));
