const sum = (number, ans) => {
	if (number === 0) return ans;

	ans = ans + number;

	return sum(number - 1, ans);
};

console.log(sum(10, 0));
