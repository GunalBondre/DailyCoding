const noOfCitizens = (arr) => {
	let count = 0;
	for (let i in arr) {
		let age = arr[i].slice(11, 13);
		if (age > 60) {
			count++;
		}
	}

	return count;
};

console.log(
	noOfCitizens(['7868190130M7522', '5303914400F9211', '9273338290F4010'])
);
