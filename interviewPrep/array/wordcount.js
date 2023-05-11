var arrangeWords = function (text) {
	let str = text.split(' ');
	// str.sort((a, b) => a.length - b.length);

	// return str.join(' ');
	let start = 0;
	let swapped = true;
	while (swapped) {
		swapped = false;

		for (let i = 0; i < str.length - 1; i++) {
			if (str[i].length > str[i + 1].length) {
				let temp = str[i];
				str[i] = str[i + 1];
				str[i + 1] = temp;
				swapped = true;
			}
		}
	}
	return str.join(' ');
	w;
};

console.log(arrangeWords('Keep calm and code on'));
