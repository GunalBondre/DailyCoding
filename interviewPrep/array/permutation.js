const permute = (arr, permutation = [], answer = []) => {
	arr.sort((a, b) => a - b);
	if (arr.length < 1) {
		answer.push([...permutation]);
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i - 1]) continue;

		permutation.push(arr[i]);
		let choices = arr.filter((n, index) => index !== i);
		permute(choices, permutation, answer);
		permutation.pop();
	}
	return answer;
};

console.log(permute([1, 1, 3]));
