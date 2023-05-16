const jump1 = (nums) => {
	let maxReach = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		maxReach = Math.max(maxReach, i + nums[i]);
		if (maxReach > nums.length) return true;
		if (maxReach == i && nums[i] == 0) return false;
	}
	return true;
};

console.log(jump1([0, 2, 3]));
