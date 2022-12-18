const print = (n) => {
	if (n > 100) {
		return;
	}
	console.log(n);
	print(n + 1);
};

console.log(print(0));
