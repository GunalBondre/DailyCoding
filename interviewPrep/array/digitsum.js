var differenceOfSum = function (nums) {
	let sum = 0;
	let digitSum = 0;
	for (let i in nums) {
		sum = sum + nums[i];
	}
	for (let i in nums) {
		let dSum = digitSum1(nums[i]);
		digitSum = digitSum + dSum;
	}

	return sum - digitSum;
};

let digitSum1 = (num) => {
	num = num.toString().split('');
	let sum = 0;
	for (let i in num) {
		sum += parseInt(num[i]);
	}
	return sum;
};

console.log(differenceOfSum([1, 15, 6, 3]));
// console.log(digitSum1(2));
