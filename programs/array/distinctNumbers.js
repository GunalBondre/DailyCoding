var distinctIntegers = function (n) {
	let count = 0;
	let arr = [];
	for (let i = 1; i <= n; i++) {
		while (i !== n) {
			if (n % i == 1) {
				arr.push(i);
				count++;
			}
			i++;
		}
		n = n - 1;
		i = 0;
	}

	return new Set(arr).size + 1;
};

console.log(distinctIntegers(3));
