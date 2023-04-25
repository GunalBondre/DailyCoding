const maxPairSum = (arr) => {
	arr.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < arr.length; i += 2) {
		sum += arr[i];
	}
	return sum;
};

console.log(maxPairSum([6, 2, 6, 5, 1, 2]));
