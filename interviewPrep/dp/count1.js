var countBits = function (n) {
	let result = [];

	for (let i = 0; i <= n; i++) {
		let count = 0;
		while (i > 0) {
			count += i & 1;
			i >>= 1;
		}
		result.push(count);
	}
};

console.log(countBits(5));
