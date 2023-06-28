/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
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

console.log(rob([1, 2, 3, 1]));
