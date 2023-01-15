const primeFact = (arr) => {
	let product = 1;

	for (let i of arr) {
		product *= i;
	}

	let arr1 = [];
	for (let i = 2; i <= product; i++) {
		while (isPrime(i) && product % i === 0) {
			if (!arr1.includes(i)) arr1.push(i);
			product /= i;
		}
	}
	return arr1;
};

const isPrime = (number) => {
	for (let i = 2; i <= Math.sqrt(number); i++) {
		maxK;
		if (number % i === 0) return false;
	}
	return true;
};

console.log(primeFact([2, 4, 3, 7, 10, 6]));
