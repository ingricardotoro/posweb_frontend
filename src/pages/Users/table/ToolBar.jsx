import { Button } from 'primereact/button';

export const leftToolbarTemplate = () => {
	return (
		<>
			<Button
				label='New'
				icon='pi pi-plus'
				className='p-button-success mr-2'
				onClick={() => null}
			/>
		</>
	);
};
