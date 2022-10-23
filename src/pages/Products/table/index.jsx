import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ToastContainer } from 'react-toastify';
import useProducts from '../../../lib/hooks/product/useProducts';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const ProductsTable = () => {
	const {
		products,
		currentProduct,
		toast,
		globalFilter,
		setGlobalFilter,
		isProductDelete,
		setIsProductDelete,
		actions
	} = useProducts();

	return (
		<>
			<ToastContainer autoClose={3000} />
			<ToolbarTemplate />
			<ConfirmDelete
				isProductDelete={isProductDelete}
				setIsProductDelete={setIsProductDelete}
				product={currentProduct}
				toast={toast}
			/>
			<DataTable
				value={products}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={<HeaderTable setGlobalFilter={setGlobalFilter} />}
			>
				<Column field='code' header='Código' sortable />
				<Column field='name' header='Nombre' sortable />
				<Column field='supplier.name' header='Proveedor' sortable />
				<Column field='cost' header='Costo' />
				<Column field='inStock' header='Stock' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default ProductsTable;
