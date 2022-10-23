export const selectSuppliersMapper = supplierObject => ({
	code: supplierObject._id,
	name: fullName(
		supplierObject.person.name,
		supplierObject.person.lastName
	)
});

const fullName = (name, lastName) => `${name} ${lastName}`;
