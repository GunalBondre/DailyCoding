const targetArr = (nums, index) => {
	let answer = [];

	for (let i in nums) {
		answer.splice(index[i], 0, nums[i]);
	}
	return answer;
};

console.log(targetArr([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
// [0,4,3,2,2]
