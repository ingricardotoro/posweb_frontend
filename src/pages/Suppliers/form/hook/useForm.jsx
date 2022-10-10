import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
	createSupplier,
	updateSupplier
} from '../../../../lib/services/suppliers';

const schemaValidation = Yup.object({
	identidad: Yup.string().required('Identidad es requerida'),

	name: Yup.string()
		.required('Nombre es requerido')
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),
	lastName: Yup.string()
		.required('Apellido is requerido')
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),

	rtn: Yup.string().min(14, 'Debe tener 14 o más caracteres de largo'),

	gender: Yup.object().nullable(),

	birth: Yup.string(),

	email: Yup.string()
		.required('Email es requerido')
		.email('No es un email valido'),

	phone1: Yup.string().required('Telefono es requerido'),

	phone2: Yup.string(),

	location: Yup.string(),

	country: Yup.object(),

	city: Yup.string(),

	companyName: Yup.string()
		.required('Nombre de la empresa es requerido')
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),

	companyLocation: Yup.string()
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),

	companyPhone1: Yup.string().trim(),

	companyPhone2: Yup.string().trim(),

	companyRtn: Yup.string()
		.min(14, 'Debe tener 14 o más caracteres de largo')
		.trim(),

	companyLogo: Yup.string().trim(),

	workPosition: Yup.string().trim(),

	title: Yup.string().trim()
});

const useFormSupplier = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const supplierEdit = useSelector(state => state.supplier.currentSupplier);
	const action = location.pathname.includes('editar') ? 'Editar' : 'Agregar';

	const initialState = {
		identidad: supplierEdit?.identidad || '',
		name: supplierEdit?.name || '',
		lastName: supplierEdit?.lastName || '',
		rtn: supplierEdit?.rtn || '',
		gender: supplierEdit?.gender || '',
		birth: supplierEdit?.birth || '',
		email: supplierEdit?.email || '',
		phone1: supplierEdit?.phone1 || '',
		phone2: supplierEdit?.phone2 || '',
		location: supplierEdit?.location || '',
		country: supplierEdit?.country || '',
		city: supplierEdit?.city || '',
		companyName: supplierEdit?.companyName || '',
		companyLocation: supplierEdit?.companyLocation || '',
		companyPhone1: supplierEdit?.companyPhone1 || '',
		companyPhone2: supplierEdit?.companyPhone2 || '',
		companyRtn: supplierEdit?.companyRtn || '',
		workPosition: supplierEdit?.workPosition || '',
		title: supplierEdit?.title || '',
		companyLogo: ''
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
			country: data.country.name,
			gender: data.gender.name || ''
		};

		if (action === 'Editar') {
			dispatch(
				updateSupplier({
					id: supplierEdit.id,
					updatedSupplierData: payload,
					toast,
					navigate
				})
			);
		} else {
			dispatch(
				createSupplier({
					createdSupplierData: payload,
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
		action
	};
};

export default useFormSupplier;
