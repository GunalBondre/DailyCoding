const subsets = (nums, perm = [], answer = [], start = 0) => {
	answer.push([...perm]);
	for (let i = start; i < nums.length; i++) {
		perm.push(nums[i]);
		let choices = nums.filter((_, index) => index !== i);
		subsets(choices, perm, answer, start + 1);
		perm.pop();
	}
	return answer;
};

console.log(subsets([1, 2, 3]));
