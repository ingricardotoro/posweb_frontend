import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
	createCategory,
	updateCategory
} from '../../../../lib/services/categories';

const schemaValidation = Yup.object({
	nameCategory: Yup.string()
		.required('Nombre es requerido')
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),
	description: Yup.string()
		.min(2, 'Debe tener 2 o más caracteres de largo')
		.trim(),

	parentCode: Yup.number(),

	index: Yup.number()
});

const useFormCategory = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const categoryEdit = useSelector(state => state.category.currentCategory);
	const action = location.pathname.includes('editar') ? 'Editar' : 'Agregar';

	const initialState = {
		nameCategory: categoryEdit?.nameCategory || '',
		description: categoryEdit?.description || '',
		index: categoryEdit?.index || -1,
		parentCode: categoryEdit?.parentCode || -1
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
		if (action === 'Editar') {
			dispatch(
				updateCategory({
					id: categoryEdit.id,
					updatedCategoryData: data,
					toast,
					navigate
				})
			);
		} else {
			dispatch(
				createCategory({
					createdCategoryData: data,
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

export default useFormCategory;
