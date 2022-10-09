import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { NotificationContext } from '../../../../lib/context/theme/NotificationContext';
import {
	createCustomer,
	updateCustomer
} from '../../../../lib/services/customers';

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

	payIVA: Yup.boolean().required('Paga IVA es requerido')
});

const useFormCustomer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const { toast } = useContext(NotificationContext);

	const customerEdit = useSelector(state => state.customer.currentCustomer);
	const action = location.pathname.includes('editar') ? 'Editar' : 'Agregar';

	const initialState = {
		identidad: customerEdit ? customerEdit?.identidad : '',
		name: customerEdit ? customerEdit?.name : '',
		lastName: customerEdit ? customerEdit?.lastName : '',
		rtn: customerEdit ? customerEdit?.rtn : '',
		gender: customerEdit ? customerEdit?.gender : '',
		birth: customerEdit ? customerEdit?.birth : '',
		email: customerEdit ? customerEdit?.email : '',
		phone1: customerEdit ? customerEdit?.phone1 : '',
		phone2: customerEdit ? customerEdit?.phone2 : '',
		location: customerEdit ? customerEdit?.location : '',
		country: customerEdit ? customerEdit?.country : '',
		city: customerEdit ? customerEdit?.city : '',
		payIVA: customerEdit ? customerEdit.payIVA : false
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
			gender: data.gender.name
		};
		console.log(payload);

		if (action === 'Editar') {
			dispatch(
				updateCustomer({
					id: customerEdit.id,
					updatedCustomerData: payload,
					toast,
					navigate
				})
			);
		} else {
			dispatch(
				createCustomer({
					createdCustomerData: payload,
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

export default useFormCustomer;
