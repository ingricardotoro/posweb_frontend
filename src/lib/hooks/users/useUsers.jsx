import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../../store/users';
import { getUsers } from '../../services/users';
import { toast } from 'react-toastify';

const useUsers = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const users = useSelector(state => state.user.users);
	const currentUser = useSelector(state => state.user.currentUser);

	const [globalFilter, setGlobalFilter] = useState('');
	const [isUserDelete, setIsUserDelete] = useState(false);

	const confirmDeleteUser = user => {
		setIsUserDelete(true);
		dispatch(setCurrentUser(user));
	};

	const handleEdit = rowData => {
		dispatch(setCurrentUser(rowData));
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
					onClick={() => confirmDeleteUser(rowData)}
				/>
			</>
		);
	};

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return {
		users,
		currentUser,
		toast,
		globalFilter,
		setGlobalFilter,
		isUserDelete,
		setIsUserDelete,
		actions
	};
};

export default useUsers;

