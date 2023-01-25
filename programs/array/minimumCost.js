const minimumCost = (cost) => {
	let first = cost[0];
	let second = cost[1];

	if (cost.length <= 2) return Math.min(first, second);

	for (let i = 2; i < cost.length; i++) {
		let current = cost[i] + Math.min(first, second);
		first = second;
		second = current;
	}
	return Math.min(first, second);
};
console.log(minimumCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
