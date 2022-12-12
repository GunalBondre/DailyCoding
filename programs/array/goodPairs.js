var numIdenticalPairs = function (nums) {
	let count = {};
	let res = 0;
	for (let i of nums) {
		if (count[i]) {
			res += count[i];
			count[i] += 1;
		} else {
			count[i] = 1;
		}
	}
	return res;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
