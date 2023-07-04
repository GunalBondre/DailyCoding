/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let ones = 0;
	let twos = 0;
	for (let num of nums) {
		ones = (ones ^ num) & ~twos;
		twos = (twos ^ num) & ~ones;
	}
	return ones;
};
const nums = [2, 2, 3, 2];
const result = singleNumber(nums);
console.log(result); // Output: 3
