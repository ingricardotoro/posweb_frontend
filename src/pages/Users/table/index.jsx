import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ToastContainer } from 'react-toastify'
import useUsers from '../../../lib/hooks/users/useUsers';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const UserTable = () => {
	const {
		users,
		currentUser,
		toast,
		globalFilter,
		setGlobalFilter,
		isUserDelete,
		setIsUserDelete,
		actions
	} = useUsers();

	return (
		<>
			<ToastContainer autoClose={3000} />
			<ToolbarTemplate />
			<ConfirmDelete
				isUserDelete={isUserDelete}
				setIsUserDelete={setIsUserDelete}
				user={currentUser}
				toast={toast}
			/>
			<DataTable
				value={users}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={<HeaderTable setGlobalFilter={setGlobalFilter} />}
			>
				<Column field='fullName' header='Nombre' sortable />
				<Column field='email' header='Email' sortable />
				<Column field='rol.name' header='Rol' />
				<Column field='username' header='Nombre de Usuario' />
				<Column field='isActive' header='Cuenta' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default UserTable;
