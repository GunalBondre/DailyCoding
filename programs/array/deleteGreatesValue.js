var deleteGreatestValue = function (grid) {
	let sum = 0;
	let max = 0;
	let arr = [];

	grid = grid.sort((a, b) => a - b);
	for (let i of grid) {
		max = Math.max(max, ...i);
		arr.push(max);
		i.pop();
		max = 0;
		console.log(arr);
	}
	sum += Math.max(...arr);

	return sum;
};

console.log(
	deleteGreatestValue([
		[9, 81],
		[33, 17],
	])
);
