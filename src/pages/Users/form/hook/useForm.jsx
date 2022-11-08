import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
	createUser,
	updateUser
} from '../../../../lib/services/users';

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

	username: Yup.string().required('Nombre de usuario es requerido'),

	password: Yup.string().required('Contraseña es requerida'),
	
	passwordConfirm: Yup.string()
	.oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden')
	.required('Repite tu contraseña para validar'),

	phone1: Yup.string().required('Telefono es requerido'),

	phone2: Yup.string(),

	location: Yup.string(),

	country: Yup.object().nullable(),

	rol: Yup.object().nullable(),

	city: Yup.string(),
});

const useFormUser = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	
	const userEdit = useSelector(state => state.user.currentUser);
	const action = location.pathname.includes('editar') ? 'Editar' : 'Agregar';

	const initialState = {
		identidad: userEdit?.identidad || '',
		name: userEdit?.name || '',
		lastName:  userEdit?.lastName || '',
		rtn:  userEdit?.rtn || '',
		gender: userEdit?.gender || '',
		birth: userEdit?.birth || '',
		username: userEdit?.username || '',
		email: userEdit?.email || '',
		password: '',
		passwordConfirm: '',
		rol: userEdit?.rol || '',
		phone1: userEdit?.phone1 || '',
		phone2: userEdit?.phone2 || '',
		location: userEdit?.location || '',
		country: userEdit?.country || '',
		city: userEdit?.city || ''
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
			gender: data.gender.name,
			rol: data.rol.name,
		};
		
		if (action === 'Editar') {
			dispatch(
				updateUser({
					id: userEdit.id,
					updatedUserData: payload,
					toast,
					navigate
				})
			);
		} else {
			dispatch(
				createUser({
					createdUserData: payload,
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

export default useFormUser;
