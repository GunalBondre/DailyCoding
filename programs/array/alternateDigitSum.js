var alternateDigitSum = function (n) {
	let sum = 0;
	let arr = [];
	n = n.toString().split('');

	for (let i in n) {
		if (n[0] === 0) arr.shift();
		if (i % 2 === 0) {
			sum += parseInt(n[i]);
		} else {
			sum -= parseInt(n[i]);
		}
	}
	return sum;
};

console.log(alternateDigitSum(10));
