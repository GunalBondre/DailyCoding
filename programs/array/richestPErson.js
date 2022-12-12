const richest = (arr) => {
	let ans = 0;
	for (let i in arr) {
		let sum = 0;
		for (let j in arr[i]) {
			sum += arr[i][j];
		}
		ans = Math.max(sum, ans);
	}
	return ans;
};

console.log(
	richest([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);
