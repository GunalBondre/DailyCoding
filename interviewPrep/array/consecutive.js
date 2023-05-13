/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	nums = Array.from(new Set(nums)); // Remove duplicates

	nums = nums.sort((a, b) => a - b);
	let count = 1;
	let start = 0;
	let end = 1;
	max = 1;

	while (end < nums.length) {
		if (nums[end] == nums[start] + 1) {
			count += 1;
			start++;
			end++;
		} else {
			start = end;
			end++;
			count = 1;
		}
		max = Math.max(max, count);
	}
	return max;
};

console.log(longestConsecutive([33]));
