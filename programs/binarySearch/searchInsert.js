var searchInsert = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start < end) {
		let mid = start + Math.floor((end - start + 1) / 2);

		if (nums[mid] === target) return mid;

		if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid;
		}
	}

	return nums[start] === target ? start : start + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5));
