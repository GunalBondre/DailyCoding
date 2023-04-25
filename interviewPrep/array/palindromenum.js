const pal = (num) => {
	let rev = 0;
	let copy = num;

	while (copy > 0) {
		let digit = copy % 10;
		rev = rev * 10 + digit;
		copy = ~~(copy / 10);
	}

	return rev === num;
};

console.log(pal(121));
