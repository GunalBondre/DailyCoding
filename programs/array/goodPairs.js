var numIdenticalPairs = function (nums) {
	let count = 0;
	for (let i in nums) {
		for (let j in nums) {
			if (nums[i] === nums[j] && i < j) {
				count++;
			}
		}
	}
	return count;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
