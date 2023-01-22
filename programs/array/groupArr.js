const groupArr = (arr) => {
	let sortedArr = arr.sort((a, b) => a - b);
	let currSum = 0;
	let visitedSum = new Map();

	for (let i in sortedArr) {
		currSum += sortedArr[i];
		if (!visitedSum.has(currSum)) {
			visitedSum.set(currSum);
			currSum = 0;
		}
	}
	return visitedSum.size;
};

console.log(groupArr([3, 3, 4, 5, 7, 7]));
