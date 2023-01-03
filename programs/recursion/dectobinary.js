const dec2bin = (decimal, result = '') => {
	if (decimal === 0) {
		return result;
	}

	result = (decimal % 2) + result;
	return dec2bin(parseInt(decimal / 2), result);
};

console.log(dec2bin(25));
