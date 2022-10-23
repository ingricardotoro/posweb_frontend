import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import useSelectCategories from '../../../../lib/hooks/category/useSelectCategories';
import useSelectSuppliers from '../../../../lib/hooks/supplier/useSelectSuppliers';
import {
	createProduct,
	updateProduct
} from '../../../../lib/services/products';

const schemaValidation = Yup.object({
	name: Yup.string()
		.required('Nombre es requerido')
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),

	description: Yup.string(),

	category: Yup.object().nullable(),

	supplier: Yup.object().nullable(),

	price1: Yup.number()
		.positive('Precio de venta debe ser positivo')
		.required('Precio es requerido'),

	price2: Yup.number().positive('Debe ser positivo, mayor a cero'),

	price3: Yup.number().positive('Debe ser positivo, mayor a cero'),

	price4: Yup.number().positive('Debe ser positivo, mayor a cero'),

	cost: Yup.number()
		.positive('Debe ser positivo, mayor a cero')
		.required('Costo es requerido'),

	inStock: Yup.number()
		.positive('Debe ser positivo, mayor a cero')
		.required('Existencia es requerido'),

	minCount: Yup.number()
		.positive('Debe ser positivo, mayor a cero')
		.required('Cantidad mínima es requerido'),

	brand: Yup.string().trim(),

	serie: Yup.string().trim(),

	color: Yup.string().trim(),

	year: Yup.string().trim(),

	weight: Yup.string().trim(),

	size: Yup.string().trim(),

	expiredDate: Yup.string().trim(),

	expiredSaleDate: Yup.string().trim(),

	isConsumible: Yup.boolean()
});

const useFormProduct = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { suppliers } = useSelectSuppliers();
	const { categories } = useSelectCategories();

	const productEdit = useSelector(state => state.product.currentProduct);
	const action = location.pathname.includes('editar') ? 'Editar' : 'Agregar';

	const initialState = {
		name: productEdit?.name || '',

		description: productEdit?.description || '',

		category: productEdit?.category || '',

		supplier: productEdit?.supplier || '',

		price1: productEdit?.price1 || 0,

		price2: productEdit?.price2 || 0,

		price3: productEdit?.price3 || 0,

		price4: productEdit?.price4 || 0,

		cost: productEdit?.cost || 0,

		inStock: Number(productEdit?.inStock) || 0,

		brand: productEdit?.brand || '',

		serie: productEdit?.serie || '',

		color: productEdit?.color || '',

		year: productEdit?.year || '',

		weight: productEdit?.weight || '',

		size: productEdit?.size || '',

		minCount: Number(productEdit?.minCount) || 0,

		expiredDate: productEdit?.expiredDate || '',

		expiredSaleDate: productEdit?.expiredSaleDate || '',

		isConsumible: productEdit?.isConsumible || false
	};

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: initialState,
		resolver: yupResolver(schemaValidation)
	});

	const onSubmit = async data => {
		const payload = {
			...data,
			category: data.category.code,
			supplier: data.supplier.code
		};

		if (action === 'Editar') {
			dispatch(
				updateProduct({
					id: productEdit.id,
					updatedProductData: payload,
					toast,
					navigate
				})
			);
		} else {
			dispatch(
				createProduct({
					createdProductData: payload,
					navigate,
					toast
				})
			);
		}
	};

	return {
		control,
		handleSubmit,
		errors,
		onSubmit,
		action,
		suppliers,
		categories
	};
};

export default useFormProduct;
