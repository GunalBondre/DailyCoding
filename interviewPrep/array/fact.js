const fact = (n, memo = {}) => {
	if (n < 1) return 1;
	if (memo[n]) return memo[n];
	return (memo[n] = n * fact(n - 1));
};

console.log(fact(5));
