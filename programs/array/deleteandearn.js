const deleteAndEarn = (arr) => {
	let map = {};
	let prev2 = 0;
	let prev1 = 0;

	for (let i of arr) {
		map[i] = map[i] + 1 || 1;
	}

	for (let i = 0; i < arr.length; i++) {
		let incl = prev2 + arr[i];
		let excl = prev1;
		let max = Math.max(incl, excl);
		prev2 = prev1;
		prev1 = max;
	}

	let key = Object.keys(map).find((key) => map[key] === prev1);
	return prev1 * key;
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
