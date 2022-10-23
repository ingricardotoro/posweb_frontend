import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch } from 'react-redux';
import {
	deleteCategory,
	getCategories
} from '../../../lib/services/categories';

const ConfirmDelete = ({
	isCategoryDelete,
	setIsCategoryDelete,
	category,
	toast
}) => {
	const dispatch = useDispatch();

	const hideDeleteCategoryDialog = () => {
		setIsCategoryDelete(false);
	};

	const handleDeleteCategory = () => {
		dispatch(deleteCategory({ id: category.id, toast }));
		hideDeleteCategoryDialog();
		dispatch(getCategories());
	};

	const questionConfirmDeleteCategory = (
		<>
			<Button
				label='No'
				icon='pi pi-times'
				className='p-button-text'
				onClick={hideDeleteCategoryDialog}
			/>
			<Button
				label='Si'
				icon='pi pi-check'
				className='p-button-text'
				onClick={handleDeleteCategory}
			/>
		</>
	);

	return (
		<Dialog
			visible={isCategoryDelete}
			style={{ width: '450px' }}
			header='Confirmar'
			modal
			footer={questionConfirmDeleteCategory}
			onHide={hideDeleteCategoryDialog}
		>
			<div className='confirmation-content'>
				<i
					className='pi pi-exclamation-triangle mr-3'
					style={{ fontSize: '2rem' }}
				/>
				{category && (
					<span>
						Estas seguro de eliminar a <b>{category.name}</b>?
					</span>
				)}
			</div>
		</Dialog>
	);
};

export default ConfirmDelete;
