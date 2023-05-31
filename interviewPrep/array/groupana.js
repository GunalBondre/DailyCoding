const groupanag = (arr) => {
	let ans = {};

	for (let str of arr) {
		let sorted = str.split('').sort().join('');
		ans[sorted] ? ans[sorted].push(str) : (ans[sorted] = [str]);
	}
	console.log(ans);
};

console.log(groupanag(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
