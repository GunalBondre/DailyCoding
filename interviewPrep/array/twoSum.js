const twoSum = (nums, target) => {
	let elementObject = {};
	for (let i in nums) {
		let find = target - nums[i];

		if (elementObject[find] !== undefined) {
			return [elementObject[find], i];
		}
		elementObject[nums[i]] = i;
	}
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
