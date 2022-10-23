import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCurrentCategory } from '../../../store/categories';
import { getCategories } from '../../services/categories';

const useCategories = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const categories = useSelector(state => state.category.categories);
	const currentCategory = useSelector(state => state.category.currentCategory);

	const [globalFilter, setGlobalFilter] = useState('');
	const [isCategoryDelete, setIsCategoryDelete] = useState(false);

	const confirmDeleteCategory = category => {
		setIsCategoryDelete(true);
		dispatch(setCurrentCategory(category));
	};

	const handleEdit = rowData => {
		dispatch(setCurrentCategory(rowData));
		navigate('editar');
	};

	const actions = rowData => {
		return (
			<>
				<Link className='p-button-rounded p-button-warning mr-2' to='editar'>
					<Button
						icon='pi pi-pencil'
						className='p-button-rounded p-button-warning mr-2'
						onClick={() => handleEdit(rowData)}
					/>
				</Link>
				<Button
					icon='pi pi-trash'
					className='p-button-rounded p-button-danger'
					onClick={() => confirmDeleteCategory(rowData)}
				/>
			</>
		);
	};

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return {
		categories,
		currentCategory,
		toast,
		globalFilter,
		setGlobalFilter,
		isCategoryDelete,
		setIsCategoryDelete,
		actions
	};
};

export default useCategories;
