var findDuplicates = function (nums) {
	if (nums.length === 1) return [];
	let start = 0;
	let end = 1;
	let arr = [];

	while (end < nums.length) {
		if (nums[start] !== nums[end]) {
			end++;
			if (end === nums.length - 1) {
				if (nums[start] == nums[end]) {
					arr.push(nums[start]);
					start++;
					end = start + 1;
				}
				start++;
				end = start + 1;
			}
		} else {
			arr.push(nums[start]);
			start++;
			end = start + 1;
		}
	}
	return arr;
};

console.log(findDuplicates([5, 4, 6, 7, 9, 3, 10, 9, 5, 6]));
