import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectSuppliers } from '../../services/suppliers';

const useSelectSuppliers = () => {
	const dispatch = useDispatch();

	const suppliers = useSelector(state => state.supplier.selectSuppliers);

	useEffect(() => {
		dispatch(getSelectSuppliers());
	}, []);

	return {
		suppliers
	};
};

export default useSelectSuppliers;
