var isPowerOfFour = function (n) {
	return n > 0 && (n & (n - 1)) == 0 && Math.sqrt(n) * Math.sqrt(n) == n;
};

console.log(isPowerOfFour(16));
