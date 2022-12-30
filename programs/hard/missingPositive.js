const missingPositive = (arr) => {
	let answer = [];
	let max = Math.max(...arr);
	for (let i = 1; i < max; i++) {
		if (!arr.includes(i)) {
			answer.push(i);
		}
	}

	return answer.length > 0 ? Math.min(...answer) : max + 1;
};

console.log(missingPositive([1]));

module.exports = missingPositive;
