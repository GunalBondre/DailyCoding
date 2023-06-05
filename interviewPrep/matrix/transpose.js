/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	return matrix[0].map((_, i) => matrix.map((row) => row[i]));
};

console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
