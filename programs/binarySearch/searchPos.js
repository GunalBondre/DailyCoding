// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;
	let ans = [];
	while (low + 1 < high) {
		let mid = low + Math.floor((high - low + 1) / 2);

		if (nums[mid] === target) {
			ans[0] = mid;
			high = mid;
		}
		if (nums[mid] < target) {
			low = mid;
			ans[1] = low;
		} else {
			high = mid;
			ans[1] = high;
		}
	}
	return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
