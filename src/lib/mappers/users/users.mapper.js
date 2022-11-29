export const usersMapper = userObject => ({
	id: userObject._id,
	fullName: fullName(
		userObject.employee.person.name,
		userObject.employee.person.lastName
	),
	name: userObject.employee.person.name,
	lastName: userObject.employee.person.lastName,
	identidad: userObject.employee.person.identidad,
	gender: { code: userObject.employee.person.gender, name: userObject.employee.person.gender },
	rtn: userObject.employee.person.rtn,
	birth: new Date(userObject.employee.person.birth),
	phone1: userObject.employee.person.phone1,
	email: userObject.employee.person.email,
	country: { code: userObject.employee.person.country, name: userObject.employee.person.country },
	city: userObject.employee.person.city,
	location: userObject.employee.person.location,
	code: userObject.employee.codeEmployee,
	username: userObject.username,
	rol: { code: userObject.rol, name: userObject.rol },
	address: addressUser(
		userObject.employee.person.country,
		userObject.employee.person.city,
		userObject.employee.person.location
	),
	isActive: userObject.isActive ? 'Activo' : 'Inactivo'
});

const fullName = (name, lastName) => `${name} ${lastName}`;
const addressUser = (country, city, location) =>
	`${country}, ${city} - ${location}`;
