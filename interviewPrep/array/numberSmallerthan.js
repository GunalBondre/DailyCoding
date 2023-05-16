/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	let countArr = [];
	let start = 0;
	let end = 0;
	let count = 0;

	while (start < nums.length) {
		while (nums[start] > nums[end] && start !== end) {
			end++;
			count++;
		}
		start++;
		end = 0;
		countArr.push(count);
	}

	return countArr;
};

console.log(smallerNumbersThanCurrent([8, 4, 0, 1, 2]));
