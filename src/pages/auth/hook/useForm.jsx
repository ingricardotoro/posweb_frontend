import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from '../../../lib/api/Axios';
import { onChecking, onLogin } from '../../../store/auth';

const schemaValidation = Yup.object({
	username: Yup.string().trim().required('Nombre de usuario es requerido'),
	password: Yup.string().required('Contraseña es requerida')
});

const useFormLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

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
			const { data } = await axios.post(
				'auth/login',
				{ username, password },
				{ withCredentials: true }
			);
			console.log(data);

			if (data.ok) {
				const { user, accessToken } = data;
				dispatch(onLogin({ ...user, accessToken }));
				navigate(from, { replace: true });
			}
		} catch (error) {
			let messageError;

			switch (error.response.status) {
				case 500:
					messageError = 'Internal Server Error';
					break;
				case 401:
					messageError = 'Credenciales no validas';
					break;
				default:
					messageError = error.response.data.message;
			}
			setIsLoading(false);
			setErrorMessage({
				error: true,
				message: messageError
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
