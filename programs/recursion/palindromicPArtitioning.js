const palindromPartition = (str, result = [], partition = []) => {
	if (str.length === 0) {
		result.push([...partition]);
	}

	for (let i = 1; i <= str.length; i++) {
		let prefix = str.substring(0, i);
		let postfix = str.substring(i);

		if (isPalindrome(prefix)) {
			partition.push(prefix);
			palindromPartition(postfix, result, partition);
			partition.pop();
		}
	}
	return result;
};

const isPalindrome = (str) => {
	let rev = '';
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}

	return str === rev;
};
console.log(palindromPartition('nitin'));
