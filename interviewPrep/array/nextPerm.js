/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let i = nums.length - 1;

	while (i > 0 && nums[i] <= nums[i - 1]) {
		i--;
	}

	if (i === 0) {
		nums.reverse();
		return nums;
	}

	let j = nums.length - 1;

	while (j >= i && nums[j] <= nums[i - 1]) {
		j--;
	}

	let temp = nums[i - 1];
	nums[i - 1] = nums[j];
	nums[j] = temp;

	let start = i,
		end = nums.length - 1;
	while (start < end) {
		temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
