import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Axios from '../../../lib/api/Axios';
import { onChecking, onLogin } from '../../../store/auth';

const schemaValidation = Yup.object({
	username: Yup.string().trim().required('Nombre de usuario es requerido'),
	password: Yup.string().required('Contraseña es requerido')
});

const useFormLogin = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState({
		error: false,
		message: ''
	});

	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { username: '', password: '' },
		resolver: yupResolver(schemaValidation)
	});

	const onSubmit = async ({ username, password }) => {
		setIsLoading(true);
		dispatch(onChecking());

		try {
			const options = {
				method: 'POST',
				data: { username, password }
			};

			const response = await Axios('auth/login', options);

			if (response.ok) {
				dispatch(onLogin({ username: 'mtoro', rol: 'Admin' }));
			}
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
			}
			setIsLoading(false);
			setErrorMessage({
				error: true,
				message
			});
		}

		setIsLoading(false);
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

export default useFormLogin;
