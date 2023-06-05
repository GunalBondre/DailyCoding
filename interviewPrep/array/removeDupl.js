const removeDup = (nums) => {
	let slow = 2;
	let fast = 2;
	if (nums.length < 2) return nums.length;

	while (fast < nums.length) {
		if (nums[fast] != nums[slow - 2]) {
			nums[slow] = nums[fast];
			slow += 1;
		}
		fast += 1;
	}
	return nums.slice(0, slow);
};

console.log(removeDup([1, 1, 1, 2, 2, 2, 3, 3, 4]));
