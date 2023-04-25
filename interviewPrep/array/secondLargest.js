const secondLargest = (arr) => {
	let largest = 0;
	let secondLargest = 0;
	let thirdLargest = 0;
	for (let i in arr) {
		if (arr[i] > largest) {
			thirdLargest = secondLargest;
			secondLargest = largest;
			largest = arr[i];
		} else if (arr[i] > secondLargest) {
			thirdLargest = secondLargest;
			secondLargest = arr[i];
		} else {
			thirdLargest = arr[i];
		}
	}
	return thirdLargest;
};

console.log(secondLargest([2, 5, 4, 7, 8, 8, 9, 11, 22]));
