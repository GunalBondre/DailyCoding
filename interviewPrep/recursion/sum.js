const sumnatural = (num) => {
	if (num < 1) return num;
	return num + sumnatural(num - 1);
};

console.log(sumnatural(5000));
