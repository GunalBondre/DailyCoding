var shuffle = function (nums, n) {
	let arr = [];
	let y = n;
	for (let i = 0; i <= n; i++) {
		arr.push(nums[i], nums[y++]);
	}
	return arr.splice(0, nums.length);
};

console.log(shuffle([7, 8, 9, 4, 5, 6], 3));
