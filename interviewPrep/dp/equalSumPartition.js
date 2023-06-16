// 416. Partition Equal Subset Sum
// Medium
// 10.6K
// 191
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums, sum) {
	for (let num of nums) {
		sum += num;
	}

	if (sum % 2 !== 0) {
		return false;
	} else if (sum % 2 == 0) {
		return canPartition(nums, sum / 2);
	}
};

console.log(canPartition([1, 5, 11, 5], 0));

// criteria
// array - check
// base condition - arr.length==0
// choice diagram - totalSum / 2 >= nums[i]
