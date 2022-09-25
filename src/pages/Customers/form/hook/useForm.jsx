import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

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

	gender: Yup.object(),

	birth: Yup.string(),

	email: Yup.string()
		.required('Email es requerido')
		.email('No es un email valido'),

	phone1: Yup.string().required('Telefono es requerido'),

	phone2: Yup.string(),

	location: Yup.string(),

	country: Yup.string(),

	city: Yup.string(),

	website: Yup.string(),

	facebook: Yup.string(),

	twitter: Yup.string(),

	linkedin: Yup.string(),

	creditLimit: Yup.number()
		.positive()
		.required('Limite de credito es requerido'),

	payIVA: Yup.boolean().required('Paga IVA es requerido')
});

const useFormCustomer = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const initialState = {
		identidad: '',
		name: '',
		lastname: '',
		rtn: '',
		gender: '',
		birth: '',
		email: '',
		phone1: '',
		phone2: '',
		location: '',
		country: '',
		city: '',
		website: '',
		facebook: '',
		twitter: '',
		linkedin: '',
		creditLimit: '',
		payIVA: false
	};

	const [isLoading, setIsLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState({
		error: false,
		message: ''
	});

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: initialState,
		resolver: yupResolver(schemaValidation)
	});

	const onSubmit = async data => {
		console.log(data);
	};

	return {
		control,
		handleSubmit,
		errors,
		onSubmit,
		errorMessage,
		isLoading
	};
};

export default useFormCustomer;
