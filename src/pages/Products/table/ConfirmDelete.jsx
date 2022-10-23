import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch } from 'react-redux';
import { deleteProduct, getProducts } from '../../../lib/services/products';

const ConfirmDelete = ({
	isProductDelete,
	setIsProductDelete,
	product,
	toast
}) => {
	const dispatch = useDispatch();

	const hideDeleteProductDialog = () => {
		setIsProductDelete(false);
	};

	const handleDeleteProduct = () => {
		dispatch(deleteProduct({ id: product.id, toast }));
		hideDeleteProductDialog();
		dispatch(getProducts());
	};

	const questionConfirmDeleteProduct = (
		<>
			<Button
				label='No'
				icon='pi pi-times'
				className='p-button-text'
				onClick={hideDeleteProductDialog}
			/>
			<Button
				label='Si'
				icon='pi pi-check'
				className='p-button-text'
				onClick={handleDeleteProduct}
			/>
		</>
	);

	return (
		<Dialog
			visible={isProductDelete}
			style={{ width: '450px' }}
			header='Confirmar'
			modal
			footer={questionConfirmDeleteProduct}
			onHide={hideDeleteProductDialog}
		>
			<div className='confirmation-content'>
				<i
					className='pi pi-exclamation-triangle mr-3'
					style={{ fontSize: '2rem' }}
				/>
				{product && (
					<span>
						Estas seguro de eliminar a <b>{product.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
