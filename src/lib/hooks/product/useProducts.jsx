import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCurrentProduct } from '../../../store/products';
import { getProducts } from '../../services/products';

const useProducts = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const products = useSelector(state => state.product.products);
	const currentProduct = useSelector(state => state.product.currentProduct);

	const [globalFilter, setGlobalFilter] = useState('');
	const [isProductDelete, setIsProductDelete] = useState(false);

	const confirmDeleteProduct = product => {
		setIsProductDelete(true);
		dispatch(setCurrentProduct(product));
	};

	const handleEdit = rowData => {
		dispatch(setCurrentProduct(rowData));
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
					onClick={() => confirmDeleteProduct(rowData)}
				/>
			</>
		);
	};

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return {
		products,
		currentProduct,
		toast,
		globalFilter,
		setGlobalFilter,
		isProductDelete,
		setIsProductDelete,
		actions
	};
};

export default useProducts;
