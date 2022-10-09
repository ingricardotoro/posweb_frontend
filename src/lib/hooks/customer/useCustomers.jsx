import { Button } from 'primereact/button';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentCustomer } from '../../../store/customers';
import { NotificationContext } from '../../context/theme/NotificationContext';
import { getCustomers } from '../../services/customers';

const useCustomers = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { toast } = useContext(NotificationContext);
	const customers = useSelector(state => state.customer.customers);
	const currentCustomer = useSelector(state => state.customer.currentCustomer);

	const [globalFilter, setGlobalFilter] = useState('');
	const [isCustomerDelete, setIsCustomerDelete] = useState(false);

	const confirmDeleteCustomer = customer => {
		setIsCustomerDelete(true);
		dispatch(setCurrentCustomer(customer));
	};

	const handleEdit = rowData => {
		dispatch(setCurrentCustomer(rowData));
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
					onClick={() => confirmDeleteCustomer(rowData)}
				/>
			</>
		);
	};

	useEffect(() => {
		dispatch(getCustomers());
	}, []);

	return {
		customers,
		currentCustomer,
		toast,
		globalFilter,
		setGlobalFilter,
		isCustomerDelete,
		setIsCustomerDelete,
		actions
	};
};

export default useCustomers;
