import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCategories } from '../../services/categories';

const useSelectCategories = () => {
	const dispatch = useDispatch();

	const categories = useSelector(state => state.category.selectCategories);

	useEffect(() => {
		dispatch(getSelectCategories());
	}, []);

	return {
		categories
	};
};

export default useSelectCategories;
