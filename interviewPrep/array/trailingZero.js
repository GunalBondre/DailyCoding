// var fact = function (n) {
// 	if (n === 0 || n === 1) return 1;
// 	else return n * fact(n - 1);
// };

// const trailingZeroes = (n) => {
// 	let result = fact(n);
// 	result = result.toString();
// 	let count = 0;
// 	for (let i = result.length - 1; i >= 0; i--) {
// 		if (result[i] === '0') {
// 			count++;
// 		} else {
// 			break;
// 		}
// 	}

// 	return count;
// };

const countTrailingZeroes = (n) => {
	let count = 0;
	while (n >= 5) {
		n = Math.floor(n / 5);
		count += n;
	}
	return count;
};

console.log(countTrailingZeroes(30));
