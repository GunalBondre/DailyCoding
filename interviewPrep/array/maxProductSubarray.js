/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let start = 0;
	let end = 0;
	let max = nums[0];
	let product = 1;

	while (end < nums.length) {
		product *= nums[end];
		if (start <= end && [product] < 0) {
			product = product / nums[start];
			start++;
		}
		max = Math.max(max, product);
		end++;
	}
	return max;
};

console.log(maxProduct([-2, 3, -4]));
