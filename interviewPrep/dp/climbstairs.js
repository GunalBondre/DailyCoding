const climbstairs = (n, memo = {}) => {
	if (n <= 1) return 1;

	if (memo[n]) return memo[n];

	return (memo[n] = climbstairs(n - 1, memo) + climbstairs(n - 2, memo));
};

console.log(climbstairs(10));
