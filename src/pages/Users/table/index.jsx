import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { useRef, useState } from 'react';
import { leftToolbarTemplate } from './ToolBar';

const UserTable = () => {
	const [isUserDelete, setIsUserDelete] = useState(false);
	const [user, setUser] = useState(null);
	const [globalFilter, setGlobalFilter] = useState('');
	const toast = useRef(null);

	const confirmDeleteUser = user => {
		console.log(user);

		setUser(user);
		setIsUserDelete(true);
	};

	const hideDeleteUserDialog = () => {
		setIsUserDelete(false);
	};

	const header = (
		<div className='table-header'>
			<h5 className='mx-0 my-1'>Control de Usuarios</h5>
			<span className='p-input-icon-left'>
				<i className='pi pi-search' />
				<InputText
					type='search'
					onInput={e => setGlobalFilter(e.target.value)}
					placeholder='Buscar...'
				/>
			</span>
		</div>
	);

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

	const users = [
		{
			code: 'qwea123',
			name: 'Elvin Sanchez',
			gender: 'Masculino',
			phone1: '+50498451230'
		},
		{
			code: 'qwea124',
			name: 'Melisa Valladares',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Paola Ferrari',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Raquel Pineda',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Daniela Midence',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Mariela Zelaya',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Lidia Barahona',
			gender: 'Femenino',
			phone1: '+50495751233'
		}
	];

	const actionBodyTemplate = rowData => {
		return (
			<>
				<Button
					icon='pi pi-pencil'
					className='p-button-rounded p-button-warning mr-2'
					onClick={() => null}
				/>
				<Button
					icon='pi pi-trash'
					className='p-button-rounded p-button-danger'
					onClick={() => confirmDeleteUser(rowData)}
				/>
			</>
		);
	};

	return (
		<>
			<Toast ref={toast} />
			<div className='mx-4'>
				<Toolbar className='my-4' left={leftToolbarTemplate}></Toolbar>
			</div>
			<DataTable
				value={users}
				paginator
				rows={10}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={header}
			>
				<Column field='code' header='Código' sortable />
				<Column field='name' header='Nombre' sortable />
				<Column field='gender' header='Genero' />
				<Column field='phone1' header='Telefono' />
				<Column body={actionBodyTemplate} header='Acciones' />
			</DataTable>
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
							Estas seguro de eliminar <b>{user.name}</b>?
						</span>
					)}
				</div>
			</Dialog>
		</>
	);
};

export default UserTable;
