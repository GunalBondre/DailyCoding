const split = (str) => {
	let left = 0;
	let right = 1;
	let sum = 0;
	let max = 0;
	str = str.split('');
	while (right < str.length) {
		let res = splitStr(str, left, right);
		right++;
		console.log(res.leftArr, res.rightArr);

		for (let i in res.leftArr) {
			if (res.leftArr[i] === '0') {
				sum += 1;
			}
		}
		for (let i in res.rightArr) {
			if (res.rightArr[i] == '1') {
				sum += 1;
			}
		}
		console.log(sum);

		max = Math.max(max, sum);
		sum = 0;
	}
	return max;
};

const splitStr = (str, leftPinter, rightPointer) => {
	let leftArr = str.slice(leftPinter, rightPointer);
	let rightArr = str.slice(rightPointer);
	return {
		leftArr,
		rightArr,
	};
};

console.log(split('011101'));
