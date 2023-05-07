const allCombinations = (arr, result = [], currentArray = []) => {
	if (arr.length < 1) {
		result.push([...currentArray]);
	}
	for (let i = 0; i < arr.length; i++) {
		currentArray.push(arr[i]);
		let filteredArr = arr.filter((_, index) => i !== index);
		allCombinations(filteredArr, result, currentArray);
		currentArray.pop();
	}

	return result;
};

console.log(allCombinations([1, 2, 3]));
// [1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]
