import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ToastContainer } from 'react-toastify';
import useCategories from '../../../lib/hooks/category/useCategories';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const CategoriesTable = () => {
	const {
		categories,
		currentCategory,
		toast,
		globalFilter,
		setGlobalFilter,
		isCategoryDelete,
		setIsCategoryDelete,
		actions
	} = useCategories();

	return (
		<>
			<ToastContainer autoClose={3000} />
			<ToolbarTemplate />
			<ConfirmDelete
				isCategoryDelete={isCategoryDelete}
				setIsCategoryDelete={setIsCategoryDelete}
				category={currentCategory}
				toast={toast}
			/>
			<DataTable
				value={categories}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={<HeaderTable setGlobalFilter={setGlobalFilter} />}
			>
				<Column field='codeCategory' header='Código' sortable />
				<Column field='nameCategory' header='Nombre' sortable />
				<Column field='description' header='Descripción' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default CategoriesTable;
