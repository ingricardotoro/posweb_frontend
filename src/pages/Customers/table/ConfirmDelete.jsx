import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const ConfirmDelete = ({ isCustomerDelete, setIsCustomerDelete, customer }) => {
	const hideDeleteCustomerDialog = () => {
		setIsCustomerDelete(false);
	};

	const questionConfirmDeleteCustomer = (
		<>
			<Button
				label='No'
				icon='pi pi-times'
				className='p-button-text'
				onClick={hideDeleteCustomerDialog}
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
			visible={isCustomerDelete}
			style={{ width: '450px' }}
			header='Confirmar'
			modal
			footer={questionConfirmDeleteCustomer}
			onHide={hideDeleteCustomerDialog}
		>
			<div className='confirmation-content'>
				<i
					className='pi pi-exclamation-triangle mr-3'
					style={{ fontSize: '2rem' }}
				/>
				{customer && (
					<span>
						Estas seguro de eliminar a <b>{customer.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
