var countDigits = function (num) {
	let digit = num.toString().split('');
	let count = 0;
	for (let i in digit) {
		let answer = isDivisible(digit[i], num);
		if (answer === true) count++;
	}
	return count;
};

const isDivisible = (digit, num) => {
	if (num % digit === 0) {
		return true;
	}
};

console.log(countDigits(121));
