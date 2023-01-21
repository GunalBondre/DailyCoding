var getCommon = function (nums1, nums2) {
	if (!nums1.length || !nums2.length) return -1;

	let hash = {};
	let arr = [];
	for (let i in nums1) {
		hash[nums1[i]] = hash[nums1[i]] + 1 || 1;
	}
	for (let i in nums2) {
		if (hash[nums2[i]]) {
			arr.push(nums2[i]);
		}
	}
	return arr.length > 0 ? Math.min(...arr) : -1;
};

console.log(getCommon([1000000000, 1000000000], [1000000000]));
