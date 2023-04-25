function print(numRows) {
	for (let i = 1; i <= numRows; i++) {
		let str = '';
		for (let j = 1; j <= i; j++) {
			if (j < i) {
				str += '*';
			} else {
				str += '#'.repeat(numRows - i + 1);
			}
		}
		console.log(str);
	}
}

print(5);
