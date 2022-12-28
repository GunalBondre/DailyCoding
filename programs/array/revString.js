const revString = (str) => {
	if (str === '') {
		return '';
	} else {
		return revString(str.substr(1)) + str.charAt(0);
	}
};

console.log(revString('coolpad'));
