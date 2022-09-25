import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';

const ConfirmDelete = ({ isUserDelete, setIsUserDelete, user }) => {
	const hideDeleteUserDialog = () => {
		setIsUserDelete(false);
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
				onClick={() => null}
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
						Estas seguro de eliminar a <b>{user.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
