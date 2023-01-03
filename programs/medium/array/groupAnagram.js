const groupAna = (arr) => {
	let answers = {};

	for (let i = 0; i < arr.length; i++) {
		let sorted = arr[i].split('').sort().join('');
		answers[sorted]
			? answers[sorted].push(arr[i])
			: (answers[sorted] = [arr[i]]);
	}
	return Object.values(answers);
};

console.log(groupAna(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
