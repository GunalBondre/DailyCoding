const rom2int = (str) => {
	let obj = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let sum = 0;

	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] < obj[str[i + 1]]) {
			sum -= obj[str[i]];
		} else {
			sum += obj[str[i]];
		}
	}
	return sum;
};

console.log(rom2int('MCMXCIV'));
