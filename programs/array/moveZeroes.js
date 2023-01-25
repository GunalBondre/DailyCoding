const moveZeroes = (arr) => {
	let windowSize = 0;

	for (let i in arr) {
		if (arr[i] === 0) windowSize++;
		else {
			let temp = arr[i];
			arr[i] = 0;
			arr[i - windowSize] = temp;
		}
	}
	return arr;
};

console.log(moveZeroes([1, 0, 3, 0, 4, 5, 0]));
