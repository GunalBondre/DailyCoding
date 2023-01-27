var rob = function (arr, n, start) {
	let prev2 = 0;
	let prev1 = arr[0];

	for (let i = start; i < n; i++) {
		let incl = prev2 + arr[i];
		let excl = prev1;
		let max = Math.max(incl, excl);
		prev2 = prev1;
		prev1 = max;
	}

	return prev1;
};

let choice = (arr) => {
	let n = arr.length;

	let ans = Math.max(rob(arr, n - 1, 1), rob(arr, n, 2));
	return ans;
};

console.log(choice([1, 2, 3]));
