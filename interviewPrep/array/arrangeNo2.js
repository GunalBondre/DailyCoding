const arrange = (nums) => {
	let start = 0;
	let end = nums.length - 1;

	while (start < end) {
		if (nums[start] % 2 == 0) {
			start++;
		} else if (nums[end] % 2 !== 0) {
			end--;
		} else {
			let temp = nums[start];
			nums[start] = nums[end];
			nums[end] = temp;
		}
	}
	return nums;
};

console.log(arrange([3, 2, 5, 6, 8, 7]));
