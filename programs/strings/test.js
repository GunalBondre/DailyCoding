var endorsements = [
	{ skill: 'css', user: 'Bill' },
	{ skill: 'javascript', user: 'Chad' },
	{ skill: 'javascript', user: 'Bill' },
	{ skill: 'css', user: 'Sue' },
	{ skill: 'javascript', user: 'Sue' },
	{ skill: 'html', user: 'Sue' },
];

const PeopleWithSkills = (endorsements) => {
	let x = endorsements.reduce((acc, { skill, user }) => {
		if (skill in acc) {
			acc[skill] = {
				user: [...acc[skill]['user'], user],
				count: acc[skill]['count'] + 1,
				skill: skill,
			};
		} else {
			acc[skill] = { user: [user], count: 1, skill: skill };
		}
		return acc;
	}, {});
	console.log(Object.values(x));
};

console.log(PeopleWithSkills(endorsements));
