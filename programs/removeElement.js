var removeElement = function (nums, val) {
	let zeroIdx = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[zeroIdx] = nums[i];
			zeroIdx++;
		}
	}
	return zeroIdx;
};

console.log(removeElement([3, 3, 1, 2], 3));
