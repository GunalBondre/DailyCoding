var smallerNumbersThanCurrent = function (nums) {
	let res = [];
	for (let i in nums) {
		let count = 0;
		for (let j in nums) {
			if (nums[j] < nums[i] && j !== i) {
				count++;
			}
		}
		res.push(count);
	}
	return res;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
