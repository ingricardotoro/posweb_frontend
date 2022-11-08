import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../../../lib/services/users';

const ConfirmDelete = ({
	isUserDelete,
	setIsUserDelete,
	user,
	toast
}) => {
	const dispatch = useDispatch();

	const hideDeleteUserDialog = () => {
		setIsUserDelete(false);
	};

	const handleDeleteUser = () => {
		dispatch(deleteUser({ id: user.id, toast }));
		hideDeleteUserDialog();
		dispatch( getUsers() );
	};

	const questionConfirmDeleteUser = (
		<>
			<Button
				label='No'
				icon='pi pi-times'
				className='p-button-text'
				onClick={hideDeleteUserDialog}
			/>
			<Button
				label='Si'
				icon='pi pi-check'
				className='p-button-text'
				onClick={handleDeleteUser}
			/>
		</>
	);

	return (
		<Dialog
			visible={isUserDelete}
			style={{ width: '450px' }}
			header='Confirmar'
			modal
			footer={questionConfirmDeleteUser}
			onHide={hideDeleteUserDialog}
		>
			<div className='confirmation-content'>
				<i
					className='pi pi-exclamation-triangle mr-3'
					style={{ fontSize: '2rem' }}
				/>
				{user && (
					<span>
						Estas seguro de {user.isActive ? 'desactivar ': 'activar ' } la cuenta de <b>{user.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
