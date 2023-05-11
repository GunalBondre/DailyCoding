Array.prototype.mymap = function (callback, args) {
	let mappedArr = [];
	for (let i = 0; i < this.length; i++) {
		mappedArr.push(callback.call(args, this[i], i, this));
	}
	return mappedArr;
};
let arr = [1, 2, 3, 4];
arr.mymap((item) => console.log(item));
