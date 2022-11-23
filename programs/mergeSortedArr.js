var merge = function (nums1, m, nums2, n) {
	// nums1 = nums1.slice(0, m);
	// nums1 = nums1.concat(nums2);
	// return nums1.sort((a, b) => a - b);
	let left = m - 1;
	let right = n - 1;

	for (let i = nums1.length - 1; i >= 0; i--) {
		if (right < 0) {
			break;
		}

		if (left >= 0 && nums1[left] > nums2[right]) {
			nums1[i] = nums1[left--];
		} else {
			nums1[i] = nums2[right--];
		}
	}
	return nums1;
};

console.log(merge([2, 0], 1, [1], 1));
