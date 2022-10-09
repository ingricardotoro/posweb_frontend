import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../../services/customers';

const useUsers = () => {
	const dispatch = useDispatch();
	const customers = useSelector(state => state.customer.customers);

	const [globalFilter, setGlobalFilter] = useState('');
	const toast = useRef(null);

	useEffect(() => {
		dispatch(getCustomers());
	}, []);

	return { customers, toast, globalFilter, setGlobalFilter };
};

export default useUsers;
