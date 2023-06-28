const change = (v) => {
	const supply = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
	let num_coins = 0;
	for (let i = supply.length - 1; i >= 0; i--) {
		while (v >= supply[i]) {
			v -= supply[i];
			num_coins++;
		}
	}
	return num_coins;
};

console.log(change(93));
