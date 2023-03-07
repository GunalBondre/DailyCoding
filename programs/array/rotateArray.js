var rotate = function (nums, k) {
	if (!nums) return;
	if (k === 0) return;

	k = k % nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);

	return nums;
};
let reverse = (arr, start, end) => {
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;

		start++;
		end--;
	}
};

console.log(rotate([1, 2, 3, 4, 5, 6], 4));
