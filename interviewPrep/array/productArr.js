/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const n = nums.length;
	const answer = new Array(n);

	// Calculate the prefix products
	let prefixProduct = 1;
	for (let i = 0; i < n; i++) {
		answer[i] = prefixProduct;
		prefixProduct *= nums[i];
	}

	// Calculate the suffix products and multiply with the prefix product
	let suffixProduct = 1;
	for (let i = n - 1; i >= 0; i--) {
		answer[i] *= suffixProduct;
		suffixProduct *= nums[i];
	}

	return answer;
};
