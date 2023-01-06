const reverse = (number) => {
	let rev = '';
	let digit = 0;

	no = Math.abs(number);
	while (no !== 0) {
		digit = no % 10;
		rev = rev + digit;
		no = parseInt(no / 10);
	}
	return rev * Math.sign(number);
};

console.log(reverse(-120));
