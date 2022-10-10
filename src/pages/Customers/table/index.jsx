import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ToastContainer } from 'react-toastify'
import useCustomers from '../../../lib/hooks/customer/useCustomers';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const CustomerTable = () => {
	const {
		customers,
		currentCustomer,
		toast,
		globalFilter,
		setGlobalFilter,
		isCustomerDelete,
		setIsCustomerDelete,
		actions
	} = useCustomers();

	return (
		<>
			<ToastContainer autoClose={3000} />
			<ToolbarTemplate />
			<ConfirmDelete
				isCustomerDelete={isCustomerDelete}
				setIsCustomerDelete={setIsCustomerDelete}
				customer={currentCustomer}
				toast={toast}
			/>
			<DataTable
				value={customers}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={<HeaderTable setGlobalFilter={setGlobalFilter} />}
			>
				<Column field='code' header='Código' sortable />
				<Column field='fullName' header='Nombre' sortable />
				<Column field='email' header='Email' sortable />
				<Column field='gender' header='Genero' />
				<Column field='phone1' header='Teléfono' />
				<Column field='address' header='Dirección' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default CustomerTable;
