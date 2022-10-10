import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch } from 'react-redux';
import { deleteSupplier, getSuppliers } from '../../../lib/services/suppliers';

const ConfirmDelete = ({
	isSupplierDelete,
	setIsSupplierDelete,
	supplier,
	toast
}) => {
	const dispatch = useDispatch();

	const hideDeleteSupplierDialog = () => {
		setIsSupplierDelete(false);
	};

	const handleDeleteSupplier = () => {
		dispatch(deleteSupplier({ id: supplier.id, toast }));
		hideDeleteSupplierDialog();
		dispatch(getSuppliers());
	};

	const questionConfirmDeleteSupplier = (
		<>
			<Button
				label='No'
				icon='pi pi-times'
				className='p-button-text'
				onClick={hideDeleteSupplierDialog}
			/>
			<Button
				label='Si'
				icon='pi pi-check'
				className='p-button-text'
				onClick={handleDeleteSupplier}
			/>
		</>
	);

	return (
		<Dialog
			visible={isSupplierDelete}
			style={{ width: '450px' }}
			header='Confirmar'
			modal
			footer={questionConfirmDeleteSupplier}
			onHide={hideDeleteSupplierDialog}
		>
			<div className='confirmation-content'>
				<i
					className='pi pi-exclamation-triangle mr-3'
					style={{ fontSize: '2rem' }}
				/>
				{supplier && (
					<span>
						Estas seguro de eliminar a <b>{supplier.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
