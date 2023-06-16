var dp = new Array(100).fill(-1).map((el) => new Array(1000).fill(-1));

const maxProfit = (weight, profit, w, n) => {
	if (n == 0 || w == 0) {
		return 0;
	}

	if (dp[n][w] !== -1) {
		return dp[n][w];
	}

	if (weight[n - 1] <= w) {
		return (dp[n][w] = Math.max(
			profit[n - 1] + maxProfit(weight, profit, w - weight[n - 1], n - 1),
			maxProfit(weight, profit, w, n - 1)
		));
	} else {
		return (dp[n][w] = Math.max(maxProfit(weight, profit, w, n - 1)));
	}
};

console.log(maxProfit([10, 20, 30], [60, 100, 120], 50, 3));
