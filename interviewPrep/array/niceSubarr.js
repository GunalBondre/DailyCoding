/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
	// let left = 0;
	// let right = nums.length;
	// let count = 0;

	// while (left < right) {
	// 	let oddCount = 0;
	// 	for (let i = left; i < right; i++) {
	// 		if (nums[i] % 2 !== 0) oddCount++;
	// 		if (oddCount == k) count++;
	// 	}
	// 	left++;
	// }
	// return count;

	let count = 0;
	let prefixSums = [0];
	let oddCount = 0;

	for (let i = 0; i < nums.length; i++) {
		oddCount += nums[i] % 2;
		prefixSums.push(oddCount);
	}

	let frequency = new Array(nums.length + 1).fill(0);

	for (let i = 0; i < prefixSums.length; i++) {
		if (prefixSums[i] >= k) {
			count += frequency[prefixSums[i] - k];
		}
		frequency[prefixSums[i]]++;
	}

	return count;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
