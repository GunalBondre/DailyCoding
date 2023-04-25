const highestProduct = (arr) => {
	let s = [];

	for (let i in arr) {
		s.push(Math.abs(arr[i]));
	}

	s.sort((a, b) => a - b);
	let start = 0;
	let end = 0;
	let max = 0;
	let min = 0;
	while (end < 3) {
		end++;
	}
	while (end <= s.length) {
		let result = findProduct(s.slice(start, end));
		max = Math.max(max, result);
		start++;
		end++;
	}
	console.log(max, min);
	return max;
};

const findProduct = (arr) => {
	let product = 1;
	for (let i in arr) {
		product = product * arr[i];
	}
	return product;
};
console.log(highestProduct([-100, -98, -1, 2, 3, 4]));
