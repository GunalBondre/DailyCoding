/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums, answer = [], curr = []) {
	nums = nums.sort((a, b) => a - b);

	const backtrack = (nums, answer, curr, start) => {
		answer.push([...curr]);
		for (let i = start; i < nums.length; i++) {
			if (i > start && nums[i] === nums[i - 1]) continue;
			curr.push(nums[i]);
			backtrack(nums, answer, curr, i + 1);
			curr.pop();
		}
	};

	backtrack(nums, answer, curr, 0);

	return answer;
};

console.log(subsetsWithDup([1, 2, 2]));
