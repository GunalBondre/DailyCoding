const d2b = (num, rem = '') => {
	if (num <= 0) return rem;
	rem += parseInt(num % 2);
	return d2b(parseInt(num / 2), rem);
};

console.log(d2b(233));
