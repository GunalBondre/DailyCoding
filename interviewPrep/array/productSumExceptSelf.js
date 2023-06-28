const product = (arr) => {
	const n = arr.length - 1;
	const answer = new Array(n);

	let prefixSum = 1;
	for (let i = 0; i <= n; i++) {
		answer[i] = prefixSum;
		prefixSum *= arr[i];
	}

	let suffixSum = 1;
	for (let i = n; i >= 0; i--) {
		answer[i] = answer[i] * suffixSum;
		suffixSum = suffixSum * arr[i];
	}

	return answer;
};

console.log(product([1, 2, 3, 4]));
