var getConcatenation = function (nums) {
	let arr = [];
	let start = 0;
	let end = 0;
	while (end <= nums.length * 2) {
		arr.push(nums[start]);
		start++;
		end++;
		if (start === nums.length) {
			start = 0;
			end++;
		}
	}
	return arr;
};

console.log(getConcatenation([5, 4, 3, 2]));
