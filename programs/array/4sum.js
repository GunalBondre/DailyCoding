var fourSum = function (nums, target) {
	let arr = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) continue;
	}
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
