const monsterLife = (H, X, Y) => {
	let res = 0;
	while (H > 0) {
		H = H + Y - X;
		res = H;
	}
	return res > 0 ? 0 : 1;
};

console.log(monsterLife(4, 6, 3));
