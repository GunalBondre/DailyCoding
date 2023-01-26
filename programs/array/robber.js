let robber = (arr) => {
	// let n = arr.length;
	// return rob(arr, n - 1);

	let prev2 = 0;
	let prev1 = arr[0];

	for (let i = 1; i < arr.length; i++) {
		let incl = prev2 + arr[i];
		let excl = prev1;
		let ans = Math.max(incl, excl);
		prev2 = prev1;
		prev1 = ans;
	}
	return prev1;
};

// let rob = (arr, n) => {
// 	if (n < 0) return 0;
// 	if (n === 0) return arr[0];

// 	let incl = rob(arr, n - 2) + arr[n];
// 	let excl = rob(arr, n - 1) + 0;

// 	return Math.max(incl, excl);
// };
console.log(robber([3, 2, 2, 3]));
