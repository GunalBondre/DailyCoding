const minimumOp = (arr) => {
	let ops = 0;
	let prev = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= prev) {
			ops += prev - arr[i] + 1;
			arr[i] += prev - arr[i] + 1;
		}
		prev = arr[i];
	}
	return ops;
};

console.log(minimumOp([1, 5, 2, 4, 1]));
