var hammingWeight = function (n) {
	let countBits = 0;
	while (n) {
		countBits += n & 1;
		n >>= 1;
	}
	return countBits;
};

console.log(hammingWeight(00000000000000000000000000001011));
