export const suppliersMapper = supplierObject => ({
	id: supplierObject._id,
	fullName: fullName(
		supplierObject.person.name,
		supplierObject.person.lastName
	),
	name: supplierObject.person.name,
	lastName: supplierObject.person.lastName,
	identidad: supplierObject.person.identidad,
	gender: { code: supplierObject.person.gender, name: supplierObject.person.gender },
	rtn: supplierObject.person.rtn,
	birth: new Date(supplierObject.person.birth),
	phone1: supplierObject.person.phone1,
	email: supplierObject.person.email,
	country: { code: supplierObject.person.country, name: supplierObject.person.country },
	city: supplierObject.person.city,
	location: supplierObject.person.location,
	code: supplierObject.codeSupplier,
	address: addressSupplier(
		supplierObject.person.country,
		supplierObject.person.city,
		supplierObject.person.location
	),
	companyName: supplierObject.companyName,
	companyLocation: supplierObject.companyLocation,
	companyPhone1: supplierObject.companyPhone1,
	companyPhone2: supplierObject.companyPhone2,
	companyRtn: supplierObject.companyRtn,
	workPosition: supplierObject.workPosition,
	title: supplierObject.title,
	companyLogo: '',
	isActive: supplierObject.isActive
});

const fullName = (name, lastName) => `${name} ${lastName}`;
const addressSupplier = (country, city, location) =>
	`${country}, ${city} - ${location}`;
