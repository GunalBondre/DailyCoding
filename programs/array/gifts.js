var pickGifts = function (gifts, k) {
	let start = 0;
	let sum = 0;
	let max = 0;
	let arr = [];
	while (start < k) {
		index = chooseMax(gifts);
		gifts[index] = Math.floor(Math.sqrt(gifts[index]));
		start++;
	}
	for (let i in gifts) {
		sum += gifts[i];
	}
	return sum;
};
const chooseMax = (arr) => {
	let x = Math.max(...arr);
	return arr.indexOf(x);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
