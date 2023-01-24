const printNumber = (n, end) => {
	console.log(n);
	if (n >= end) return;

	let result = printNumber(n + 1);
	console.log(n);

	return result;
};

console.log(printNumber(1, 10));
