const root = require('./main');

function dfc(root) {
	let stack = [root];
	while (stack.length > 0) {
		let current = stack.pop();
		console.log(current);

		if (current.left) {
			stack.push(current.left);
		}
		if (current.right) stack.push(current.right);
	}
}

dfc(root);
