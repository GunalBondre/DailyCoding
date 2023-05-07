var combine = function (n, k) {
	const result = [];

	const backtrack = (current, start) => {
		if (current.length === k) {
			result.push([...current]);
		} else {
			for (let i = start; i <= n; i++) {
				current.push(i);
				backtrack(current, i + 1);
				current.pop();
			}
		}
	};

	backtrack([], 1);

	return result;
};

console.log(combine(4, 2));
