const moveZero = (arr) => {
	let count = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] === 0) {
			count++;
		} else {
			arr[i - count] = arr[i];
			arr[i] = 0;
		}
	}
	return arr;
};

console.log(moveZero([0, 1, 0, 2, 3]));
