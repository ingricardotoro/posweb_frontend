import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCurrentSupplier } from '../../../store/suppliers';
import { getSuppliers } from '../../services/suppliers';

const useSuppliers = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const suppliers = useSelector(state => state.supplier.suppliers);
	const currentSupplier = useSelector(state => state.supplier.currentSupplier);

	const [globalFilter, setGlobalFilter] = useState('');
	const [isSupplierDelete, setIsSupplierDelete] = useState(false);

	const confirmDeleteSupplier = supplier => {
		setIsSupplierDelete(true);
		dispatch(setCurrentSupplier(supplier));
	};

	const handleEdit = rowData => {
		dispatch(setCurrentSupplier(rowData));
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
					onClick={() => confirmDeleteSupplier(rowData)}
				/>
			</>
		);
	};

	useEffect(() => {
		dispatch(getSuppliers());
	}, []);

	return {
		suppliers,
		currentSupplier,
		toast,
		globalFilter,
		setGlobalFilter,
		isSupplierDelete,
		setIsSupplierDelete,
		actions
	};
};

export default useSuppliers;
