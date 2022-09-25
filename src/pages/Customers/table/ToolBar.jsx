import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

export const ToolbarTemplate = () => {
	const leftToolbar = (
		<Button
			label='Nuevo'
			icon='pi pi-plus'
			className='p-button-success mr-2'
			onClick={() => null}
		/>
	);

	return (
		<div className='mx-4'>
			<Toolbar className='my-4' left={leftToolbar}></Toolbar>
		</div>
	);
};
