var maxProfit = function (prices) {
	let maxProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		let currentProfit = prices[i] - prices[i - 1];
		if (currentProfit < 0) {
			currentProfit = 0;
		}
		maxProfit = Math.max(maxProfit, currentProfit);
	}
	return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
