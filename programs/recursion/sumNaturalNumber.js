const sum = (number) => {
	if (number === 0) return number;

	return number + sum(number - 1);
};

console.log(sum(10));
