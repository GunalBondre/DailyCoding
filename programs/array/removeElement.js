var removeElement = function (nums, val) {
	let zeroIdx = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[zeroIdx] = nums[i];
			zeroIdx++;
		}
	}
	console.log(nums);
	return nums.slice(0, zeroIdx);
};

console.log(removeElement([4, 3, 1, 2, 7, 6], 2));
