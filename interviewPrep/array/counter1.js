/**
 * @param {number} n
 * @return {Function} counter
 */
var counter = (function (n) {
	return function () {
		n += 1;
		return n;
	};
})(9);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
