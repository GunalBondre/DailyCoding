var leftRigthDifference = function (nums) {
	let answer = [];
	let leftSum = 0;
	let rightSum = 0;

	for (let i = 0; i < nums.length; ++i) {
		rightSum += nums[i];
	}

	for (let i = 0; i < nums.length; ++i) {
		rightSum -= nums[i];
		answer.push(Math.abs(leftSum - rightSum));
		leftSum += nums[i];
	}
	return answer;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
