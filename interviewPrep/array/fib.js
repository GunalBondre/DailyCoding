const fib = (num) => {
	let arr = [0, 1];
	let a = 0;
	let b = 1;
	let nextTerm;
	for (let i = 2; i < num; i++) {
		nextTerm = a + b;
		a = b;
		b = nextTerm;
		arr.push(nextTerm);
	}
	console.log(arr);
};

console.log(fib(500));
