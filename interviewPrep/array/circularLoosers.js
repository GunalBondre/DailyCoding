var circularGameLosers = function (n, k) {
	let arr = [];
	let receiver = 1;
	let visitedArr = [];
	outer: for (let i = 0; i < n; i++) {
		receiver = receiver + i * k;
		while (receiver > n) {
			receiver = receiver - n;
			if (visitedArr.includes(receiver)) {
				break outer;
			}
			visitedArr.push(receiver);
		}
	}

	for (let i = 1; i <= n; i++) {
		if (!visitedArr.includes(i)) {
			arr.push(i);
		}
	}
	return arr;
};

console.log(circularGameLosers(24, 1));

// 1->2->3->6->4->3
