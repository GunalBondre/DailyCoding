/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let count = 0;
	for (let i in nums) {
		if (nums[i] == val) {
			count++;
		} else {
			nums[i - count] = nums[i];
		}
	}
	return nums.slice(0, count);
};

console.log(removeElement([3, 2, 2, 3], 3));
