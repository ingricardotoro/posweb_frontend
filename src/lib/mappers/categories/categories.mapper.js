export const categoriesMapper = categoryObject => ({
	id: categoryObject._id,
	codeCategory: categoryObject.codeCategory,
	nameCategory: categoryObject.nameCategory,
	description: categoryObject.description,
	index: categoryObject.index,
	parentCode: categoryObject.parentCode,
	isActive: categoryObject.isActive
});

