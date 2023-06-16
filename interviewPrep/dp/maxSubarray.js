const maxSubarray = (arr) => {
	let n = arr.length;
	let dp = new Array(n).fill(0);
	dp[0] = arr[0];
	max = 0;
	for (let i = 1; i < n; i++) {
		dp[i] = arr[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
		max = Math.max(dp[i], max);
	}
	return max;
};

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
