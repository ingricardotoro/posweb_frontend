export const selectCategoriesMapper = categoryObject => ({
	code: categoryObject._id,
	name: categoryObject.nameCategory
});

