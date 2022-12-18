const secondLargest = (arr) => {
	let large = 0;
	let secondLarge = 0;

	for (let i of arr) {
		if (i > large) {
			secondLarge = large;
			large = i;
		} else if (i > secondLarge && i != large) {
			secondLarge = i;
		}
	}

	return secondLarge;
};

console.log(secondLargest([3, 5, 7, 4, 8, 8]));
