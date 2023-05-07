function find_subsequences(nums, target) {
	const MOD = 1e9 + 7;
	nums.sort((a, b) => a - b); // sort the array in ascending order
	let left = 0,
		right = nums.length - 1;
	let count = 0;
	while (left <= right) {
		if (nums[left] + nums[right] <= target) {
			count = (count + Math.pow(2) ** Math.pow(right - left)) % Math.pow(MOD);
			left++;
		} else {
			right--;
		}
	}
	return count % Math.pow(MOD);
}

console.log(find_subsequences([3, 5, 6, 7], 9));
