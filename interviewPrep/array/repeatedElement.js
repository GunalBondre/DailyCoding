var repeatedNTimes = function (nums) {
	let index = 0;

	for (let i in nums) {
		if (nums[i] !== nums[index]) {
			index++;
			nums[index] = nums[i];
		}
	}
	nums.length = index + 1;

	return nums;
	// let answer = {};
	// let arr = [];

	// for (let num of nums) {
	// 	if (answer[num]) {
	// 		arr.push(num);
	// 	} else {
	// 		answer[num] = 1;
	// 	}
	// }
	// return arr;
};

console.log(repeatedNTimes([1, 2, 2, 3, 4, 4, 5, 6, 6]));
