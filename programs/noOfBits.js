const bits = (x) => {
	let count_bits = 0;

	while (x) {
		count_bits += x & 1;
		x = x >>> 1;
	}
	return count_bits;
};

console.log(bits(00000000000000000000000000001011));
