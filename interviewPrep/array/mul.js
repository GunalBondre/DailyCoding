const alternateMul = (arr) => {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
		let choices = arr.filter((_, index) => index != i);
		let mul = multiplication(choices);
		answer.push(mul);
	}
	return answer;
};

const multiplication = (arr) => {
	return arr.reduce((product, element) => product * element);
};

console.log(alternateMul([1, 2, 3, 4]));
