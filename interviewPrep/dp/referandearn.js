const deleteandearn = (arr) => {
	const dp = new Array(100001).fill(0);
	for (let num of arr) {
		dp[num] += num;
	}
	let prev = 0;
	let curr = 0;

	for (let i = 0; i < dp.length; i++) {
		let max = Math.max(prev + dp[i], curr);
		prev = curr;
		curr = max;
	}
	return curr;
};

console.log(deleteandearn([2, 2, 3, 3, 3, 4]));
