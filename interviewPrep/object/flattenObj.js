const data = {
	category1: {
		subcategory1: {
			subsubcategory1: 10,
			subsubcategory2: 20,
		},
		subcategory2: {
			subsubcategory3: 30,
			subsubcategory4: 40,
		},
	},
	category2: {
		subcategory3: {
			subsubcategory5: 50,
			subsubcategory6: 60,
		},
		subcategory4: {
			subsubcategory7: 70,
			subsubcategory8: 80,
		},
	},
};

const flattenObj = (obj, path = '') => {
	let flatArr = Object.entries(obj).map(([key, value]) => {
		const pathLink = path ? `${path}/${key}` : key;

		if (typeof value === 'object') {
			return flattenObj(value, pathLink);
		} else {
			return { CategoryPath: pathLink, value };
		}
	});
	let result = [];

	for (let item of flatArr) {
		if (Array.isArray(item)) {
			result.push(...item);
		} else {
			result.push(item);
		}
	}

	return result;
};

console.log(flattenObj(data));
