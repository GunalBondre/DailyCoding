const validSudoku = (board) => {
	let size = 9;
	// check row

	for (let i = 0; i < size; i++) {
		let rowSet = new Set();
		for (let j = 0; j < size; j++) {
			if (board[i][j] !== '.') {
				if (rowSet.has(board[i][j])) {
					return false;
				}
				rowSet.add(board[i][j]);
			}
		}
	}

	// check col

	for (let j = 0; j < size; j++) {
		let colSet = new Set();

		for (let i = 0; i < size; i++) {
			if (board[i][j] !== '.') {
				if (colSet.has(board[i][j])) {
					return false;
				}
				colSet.add(board[i][j]);
			}
		}
	}

	// check 3*3

	for (let box = 0; box < size; box++) {
		let boxSet = new Set();
		let startX = Math.floor(box / 3) * 3;
		let startY = (box % 3) * 3;

		for (let i = startX; i < startX + 3; i++) {
			for (let j = startY; j < startY + 3; j++) {
				if (board[i][j] !== '.') {
					if (boxSet.has(board[i][j])) {
						return false;
					}
					boxSet.add(board[i][j]);
				}
			}
		}
	}

	return true;
};

console.log(
	validSudoku([
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	])
);
