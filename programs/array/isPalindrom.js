const isPalindrom = (number) => {
	return number === parseInt(number.toString().split('').reverse().join(''));
};

console.log(isPalindrom(121));
