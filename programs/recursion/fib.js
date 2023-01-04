const fib = (num, memo) => {
	if (num === 0 || num === 1) return num;
	if (memo[num]) {
		return memo[num];
	} else {
		memo[num] = num;
	}
	return fib(num - 1, memo) + fib(num - 2, memo);
};

console.log(fib(1000, {}));
