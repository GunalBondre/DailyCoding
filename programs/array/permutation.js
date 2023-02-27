const permute = (nums, permutation = [], result = []) => {
	if (nums.length < 1) {
		result.push([...permutation]);
	}
	for (let i = 0; i < nums.length; i++) {
		permutation.push(nums[i]);
		let choices = nums.filter((_, index) => index !== i);
		permute(choices, permutation, result);
		permutation.pop();
	}
	return result;
};

console.log(permute([1, 2, 3]));
