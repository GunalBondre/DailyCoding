class Node {
	constructor(val) {
		this.left = null;
		this.right = null;
		this.val = val;
	}
}

class BST {
	constructor(val) {
		this.root = new Node(val);
		this.count = 0;
	}

	size() {
		return this.count;
	}
	insert(val) {
		this.count++;
		let newNode = new Node(val);

		const searchTree = (node) => {
			if (val < node.val) {
				if (!node.left) node.left = newNode;
				else searchTree(node.left);
			}
			if (val > node.val) {
				if (!node.right) node.right = newNode;
				else searchTree(node.right);
			}
		};

		searchTree(this.root);
	}
	min() {
		while (this.root.left) {
			this.root = this.root.left;
		}
		return this.root.val;
	}
	max() {
		while (this.root.right) {
			this.root = this.root.right;
		}
		return this.root.val;
	}

	contains(target) {}
	// depth first search

	// 0 root left right
	preOrder() {
		let res = [];

		const searchTree = (node) => {
			res.push(node.val);
			if (node.left) searchTree(node.left);
			if (node.right) searchTree(node.right);
		};

		searchTree(this.root);

		return res;
	}
	//   left right root
	postOrder() {
		let res = [];

		const searchTree = (node) => {
			if (node.left) searchTree(node.left);
			if (node.right) searchTree(node.right);
			res.push(node.val);
		};

		searchTree(this.root);

		return res;
	}
	//   left root right
	inOrder() {
		let res = [];

		const searchTree = (node) => {
			if (node.left) searchTree(node.left);
			res.push(node.val);
			if (node.right) searchTree(node.right);
		};

		searchTree(this.root);

		return res;
	}

	bfs() {
		let res = [];
		let queue = [this.root];

		while (queue.length) {
			let current = queue.shift();
			res.push(current.val);

			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return res;
	}
}

const tree = new BST(15);

tree.insert(3);
tree.insert(36);

tree.insert(2);
tree.insert(12);
tree.insert(28);
tree.insert(39);

console.log(tree.inOrder());
