var maxKelements = function (nums, k) {
	let score = 0;
	let count = 0;
	for (let i = 0; i <= nums.length; i++) {
		let max = Math.max(...nums);

		if (nums[i] === max && nums.indexOf(max) < nums.length && count < k) {
			score += nums[i];
			nums[i] = Math.ceil(nums[i] / 3);
			count++;
		} else if (i === nums.length && count < k) {
			i = -1;
			continue;
		}
	}

	return score;
};

console.log(
	maxKelements([533854490, 546147233, 543352274, 161843442, 268635067], 3)
);
