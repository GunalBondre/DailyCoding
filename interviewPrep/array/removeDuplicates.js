const removeDup = (nums) => {
	let index = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[index] = nums[i];
			index++;
		}
	}
	return nums.slice(0, index);
};

console.log(removeDup([1, 1, 2, 3, 3, 4]));
