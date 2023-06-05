const rotateMatrix = (matrix) => {
	let transposed = matrix[0].map((_, i) => matrix.map((row) => row[i]));

	for (let i in transposed) {
		transposed[i].reverse();
	}
	return transposed;
};

console.log(
	rotateMatrix([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
