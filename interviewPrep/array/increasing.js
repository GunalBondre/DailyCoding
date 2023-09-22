/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (arr) {
	let count = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= arr[i - 1]) {
			count++;
			if (
				count > 1 ||
				(i > 1 &&
					arr[i - 2] >= arr[i] &&
					i + 1 < arr.length &&
					arr[i + 1] <= arr[i - 1])
			)
				return false;
		}
	}

	return true;
};
