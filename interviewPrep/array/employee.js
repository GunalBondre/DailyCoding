let company = {
	name: 'XYZ Corp',
	departments: [
		{
			name: 'Engineering',
			employees: [
				{ name: 'John', age: 30 },
				{ name: 'Jane', age: 28 },
				{ name: 'Alex', age: 35 },
			],
		},
		{
			name: 'Sales',
			employees: [
				{ name: 'Mike', age: 32 },
				{ name: 'Emily', age: 27 },
				{ name: 'Sam', age: 29 },
			],
		},
		{
			name: 'Marketing',
			employees: [
				{ name: 'Jessica', age: 31 },
				{ name: 'Daniel', age: 33 },
			],
		},
	],
};

let { departments } = company;

const allEmployeeNames = departments.flatMap((department) =>
	department.employees.map((employee) => employee.name)
);

let arr = [];
let avgAge = 0;
for (let i in departments) {
	let { employees } = departments[i];
	for (let j in employees) {
		arr.push(employees[j].name);
		avgAge = avgAge + employees[j].age;
	}
}

let engineeringEmployees = departments.find(
	(department) => department.name === 'Engineering'
).employees;

let age = engineeringEmployees.reduce((sum, employee) => sum + employee.age, 0);

const young = departments.reduce((department, current) => {
	const currentMin = current.employees.length
		? Math.min(...current.employees.map((emp) => emp.age))
		: Infinity;
	const departmentMinAge = department.employees?.length
		? Math.min(...department?.employees?.map((emp) => emp.age))
		: Infinity;
	return currentMin < departmentMinAge ? current : department;
});

console.log(young.name);
