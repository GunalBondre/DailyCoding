var OrderedStream = function (n) {
	this.pointer = 0;
	this.arr = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
	let chunk = [];
	this.arr[id - 1] = value;

	while (this.arr[this.pointer]) {
		chunk.push(this.arr[this.pointer]);
		this.pointer += 1;
	}
	return chunk;
};

const os = new OrderedStream(5);
os.insert(2, 'ccccc');
os.insert(1, 'bbbbb');
os.insert(0, 'aaaaa');
console.log(os);
