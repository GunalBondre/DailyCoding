var findDifference = function (nums1, nums2) {
	const countMap = {};
	const difference1 = [];
	const difference2 = [];

	for (let num of nums1) {
		countMap[num] = (countMap[num] || 0) + 1;
	}

	for (let num of nums2) {
		if (!countMap[num]) {
			difference2.push(num);
		} else {
			countMap[num]--;
		}
	}

	for (let num in countMap) {
		if (countMap[num] > 0) {
			difference1.push(Number(num));
		}
	}

	return [difference1, difference2];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
