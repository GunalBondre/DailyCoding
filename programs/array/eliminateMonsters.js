var eliminateMaximum = function (dist, speed) {
	for (let i = 0; i < dist.length; i++) {
		dist[i] = (dist[i] - 1) / speed[i];
	}
	dist = dist.sort((a, b) => a - b);
	for (let i = 0; i < dist.length; i++) {
		if (i > dist[i]) return i;
	}
	return dist.length;
};

console.log(eliminateMaximum([3, 2, 4], [5, 3, 2]));
