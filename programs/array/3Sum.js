const threeSum = (arr) => {
	let res = [];
	arr = arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length - 2; i++) {
		if (i > 0 && arr[i] == arr[i - 1]) continue;

		let fstPtr = i + 1;
		let lstPtr = arr.length - 1;
		while (fstPtr < lstPtr) {
			let sum = arr[i] + arr[fstPtr] + arr[lstPtr];
			if (sum === 0) {
				let tempArr = [];
				tempArr.push(arr[i], arr[lstPtr], arr[fstPtr]);
				res.push(tempArr);
				lstPtr--;
				fstPtr++;

				while (arr[fstPtr] === arr[fstPtr - 1] && fstPtr < lstPtr) {
					fstPtr++;
				}
				while (arr[lstPtr] === arr[lstPtr + 1] && fstPtr < lstPtr) {
					lstPtr--;
				}
			} else if (sum > 0) {
				lstPtr--;
			} else {
				fstPtr++;
			}
		}
	}
	return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
