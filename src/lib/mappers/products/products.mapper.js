export const productsMapper = productObject => ({
	id: productObject._id,
	name: productObject.name,
	code: productObject.codeProduct,
	category: { code: productObject.category._id, name: productObject.category.nameCategory },
	supplier: { code: productObject.supplier._id, name: `${productObject.supplier.person.name} ${productObject.supplier.person.lastName}` },
	price1: productObject.price1,
	price2: productObject.price2,
	price3: productObject.price3,
	price4: productObject.price4,
	cost: productObject.cost,
	inStock: productObject.inStock,
	minCount: productObject.minCount,
	brand: productObject.brand,
	serie: productObject.serie,
	year: productObject.year,
	weight: productObject.weight,
	size: productObject.size,
	expiredDate: new Date(productObject.expiredDate),
	expiredSaleDate: new Date(productObject.expiredSaleDate),
	isConsumible: productObject.isConsumible,
	isActive: productObject.isActive
});

