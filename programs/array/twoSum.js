const twoSum = (arr, x) => {
	let hash = {};

	for (let i in arr) {
		let target = x - arr[i];

		if (hash[target]) {
			return [parseInt(hash[target]) + 1, parseInt(i) + 1];
		} else {
			hash[arr[i]] = i;
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 17));
