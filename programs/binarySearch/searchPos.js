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
	if (nums.length === 0) return -1;
	while (low + 1 < high) {
		let mid = low + Math.floor((high - low + 1) / 2);

		// if (nums[mid] === target) return mid;
		if (nums[mid] < target) low = mid;
		else high = mid;
	}
	if (nums[low] === target) return low;
	if (nums[high] === target) return high;
	return low && high ? [low, high] : [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 23));
