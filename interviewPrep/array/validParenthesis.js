const parenthesis = (str) => {
	let result = [];

	for (let i in str) {
		if (str[i] === '(') result.push(')');
		else if (str[i] === '[') result.push(']');
		else if (str[i] === '{') result.push('}');
		else if (result.length === 0 || result.pop() !== str[i]) return false;
	}
	return result.length === 0;
};

console.log(parenthesis('(([]))'));
