// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

var findMin = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	if (nums.length === 1) return nums[0];
	while (left < right) {
		let mid = left + Math.floor((right - left + 1) / 2);

		if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
		if (nums[mid - 1] < nums[mid]) return mid;
		if (nums[mid] > nums[0]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};

console.log(findMin([3, 4, 1, 9, 2]));
