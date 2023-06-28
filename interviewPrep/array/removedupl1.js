const removeDuplicares = (arr) => {
	if (arr.length < 2) return arr.length;

	let slow = 2;
	let count = 1;

	for (let fast = 2; fast < arr.length; fast++) {
		if (arr[fast] !== arr[slow - 2]) {
			arr[slow] = arr[fast];
			slow++;
			count = 1;
		} else if (count < 2) {
			arr[slow] = arr[fast];
			count++;
			fast++;
		}
	}
	return arr.slice(0, slow);
};

console.log(removeDuplicares([1, 1, 1, 2, 2, 2, 2, 3, 3]));
