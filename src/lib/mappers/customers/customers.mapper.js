export const customersMapper = customerObject => ({
	id: customerObject._id,
	fullName: fullName(
		customerObject.person.name,
		customerObject.person.lastName
	),
	name: customerObject.person.name,
	lastName: customerObject.person.lastName,
	identidad: customerObject.person.identidad,
	gender: customerObject.person.gender,
	rtn: customerObject.person.rtn,
	birth: customerObject.person.birth,
	phone1: customerObject.person.phone1,
	email: customerObject.person.email,
	country: customerObject.person.country,
	city: customerObject.person.city,
	location: customerObject.person.location,
	code: customerObject.codeCustomer,
	payIVA: customerObject.payIVA,
	address: addressCustomer(
		customerObject.person.country,
		customerObject.person.city,
		customerObject.person.location
	),
	isActive: customerObject.isActive
});

const fullName = (name, lastName) => `${name} ${lastName}`;
const addressCustomer = (country, city, location) =>
	`${country}, ${city} - ${location}`;
