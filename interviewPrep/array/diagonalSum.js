const diagonalSum = (nums) => {
	let n = nums.length;
	let res = 0;
	for (let i = 0; i < n; i++) {
		res += nums[i][i];
		res += nums[n - 1 - i][i];
	}

	if (nums.length % 2 != 0) {
		res -= nums[Math.floor(n / 2)][Math.floor(n / 2)];
	}

	return res;
};

console.log(
	diagonalSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
