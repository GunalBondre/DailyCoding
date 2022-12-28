const arr = [
	{
		id: 0,
		name: 'Biomes',
		icon: 'mdi-image-filter-hdr',
		isParent: true,
		children: [
			{
				id: 1,
				name: 'Redwood forest',
				icon: 'mdi-image-filter-hdr',
			},
		],
	},
	{
		id: 1,
		name: 'Trees',
		icon: 'mdi-pine-tree',
		children: [
			{
				id: 8,
				name: 'Redwood',
				icon: 'mdi-pine-tree',
			},
		],
	},
];

let answer = [];
let res = [];
const findElement = (element) => {
	element.forEach((item) => {
		parseItem(item);
	});
	return res;
};

const parseItem = (item) => {
	Object.keys(item).forEach((key) => {
		if (typeof item[key] === 'object') {
			parseItem(item[key]);
		}
		if (key === 'icon') {
			res.push(item[key]);
		}
		if (typeof item[key] === 'string') {
			const searchReg = new RegExp('mdi', 'gi');
			if (item[key].match(searchReg)) {
				answer.push(item[key]);
			}
		}
	});
};

console.log(findElement(arr));
