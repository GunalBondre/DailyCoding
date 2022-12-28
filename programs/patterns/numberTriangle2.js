const numberTriangle = (rows) => {
	let pattern = '';
	for (let index = 1; index <= rows; index++) {
		for (let numbers = 1; numbers <= index; numbers++) {
			pattern += index;
		}
		pattern += '\n';
	}
	return pattern;
};

console.log(numberTriangle(5));
