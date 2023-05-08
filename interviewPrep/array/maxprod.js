/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let start = 0;
	let end = nums.length - 1;
	let max = 0;
	while (start <= end) {
		let prod = (nums[start] - 1) * (nums[end] - 1);
		max = Math.max(max, prod);
		end--;
		if (start === end) {
			start++;
			end = nums.length - 1;
			if (start === end) break;
		}
	}
	return max;
};

console.log(maxProduct([1, 1, 1, 1]));
