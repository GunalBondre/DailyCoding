const rob = (arr) => {
	let n = arr.length;
	let dp = new Array(n).fill(-1);
	return robRec(arr, n - 1, dp);
};

const robRec = (arr, n, dp) => {
	if (n <= 0) return 0;

	if (dp[n] !== -1) {
		return dp[n];
	}

	const robCurrent = arr[n] + robRec(arr, n - 2, dp);
	const skipCurr = robRec(arr, n - 1, dp);

	const max = Math.max(robCurrent, skipCurr);
	dp[n] = max;

	return dp[n];
};

console.log(rob([1, 3, 2, 1]));
