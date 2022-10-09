import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentCustomer } from '../../../store/customers';

export const ToolbarTemplate = () => {
	const dispatch = useDispatch();
	const leftToolbar = (
		<Link to='nuevo'>
			<Button
				icon='pi pi-plus'
				className='p-button-rounded p-button-success mr-2'
				label='Nuevo'
				onClick={() => dispatch(setCurrentCustomer({}))}
			/>
		</Link>
	);

	return <Toolbar className='m-4' left={leftToolbar}></Toolbar>;
};
