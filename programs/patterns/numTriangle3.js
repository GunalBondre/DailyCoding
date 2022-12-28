const numberTriangle = (num) => {
	let pattern = '';
	let variable = 1;
	for (let i = 1; i <= num; i++) {
		for (let j = 1; j <= i; j++) {
			pattern += variable + ' ';
			variable++;
		}
		pattern += '\n';
	}

	return pattern;
};

console.log(numberTriangle(5));
