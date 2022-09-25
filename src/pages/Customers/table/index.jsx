import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const CustomerTable = () => {
	const [isCustomerDelete, setIsCustomerDelete] = useState(false);
	const [customer, setCustomer] = useState(null);
	const [globalFilter, setGlobalFilter] = useState('');
	const toast = useRef(null);

	const confirmDeleteCustomer = customer => {
		console.log(customer);

		setCustomer(customer);
		setIsCustomerDelete(true);
	};

	const users = [
		{
			code: 'qwea123',
			name: 'Elvin Sanchez',
			rol: 'Admin',
			gender: 'Masculino',
			phone1: '+50498451230'
		},
		{
			code: 'qwea124',
			name: 'Melisa Valladares',
			rol: 'Admin',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Paola Ferrari',
			rol: 'Mesero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Raquel Pineda',
			rol: 'Cajero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Daniela Midence',
			rol: 'Mesero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Mariela Zelaya',
			rol: 'Cajero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Lidia Barahona',
			rol: 'Admin',
			gender: 'Femenino',
			phone1: '+50495751233'
		}
	];

	const actions = rowData => {
		return (
			<>
				<Link className='p-button-rounded p-button-warning mr-2' to='editar'>
					<Button
						icon='pi pi-pencil'
						className='p-button-rounded p-button-warning mr-2'
					/>
				</Link>
				<Button
					icon='pi pi-trash'
					className='p-button-rounded p-button-danger'
					onClick={() => confirmDeleteCustomer(rowData)}
				/>
			</>
		);
	};

	return (
		<>
			<Toast ref={toast} />
			<ToolbarTemplate />
			<ConfirmDelete
				isCustomerDelete={isCustomerDelete}
				setIsCustomerDelete={setIsCustomerDelete}
				customer={customer}
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
				<Column field='code' header='Código' sortable />
				<Column field='name' header='Nombre' sortable />
				<Column field='rol' header='Rol' sortable />
				<Column field='gender' header='Genero' />
				<Column field='phone1' header='Telefono' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default CustomerTable;
