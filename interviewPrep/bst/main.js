class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// function dfc(a) {
// 	let stack = [a];
// 	while (stack.length > 0) {
// 		let current = stack.pop();
// 		console.log(current.val);

// 		if (current.right) stack.push(current.right);

// 		if (current.left) {
// 			stack.push(current.left);
// 		}
// 	}
// }
// dfc(a);

const recursiveDFS = (root) => {
	if (!root) return [];
	const leftValues = recursiveDFS(root.left);
	const rightValues = recursiveDFS(root.right);

	return [root.val, ...leftValues, ...rightValues];
};

const bfs = (root, value) => {
	if (!root) return [];
	let queue = [root];

	while (queue.length) {
		let current = queue.shift();
		if (current.val == value.val) {
			return true;
		}
		if (current.right) queue.push(current.right);
		if (current.left) queue.push(current.left);
	}
};

console.log(bfs(a, d));
// console.log(recursiveDFS(a));
module.exports = a;
