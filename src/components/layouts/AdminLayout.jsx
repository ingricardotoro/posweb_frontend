import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SidebarProvider } from '../../lib/context/theme/SidebarContext';
import { Input, InputDate, InputSelect, SelectMulti } from '../commons/forms';
import Navbar from '../navigation/Navbar';
import SidebarPos from '../navigation/Sidebar';

const schemaValidation = Yup.object({
	name: Yup.string().trim().required('Nombre es requerido'),
	country: Yup.object().required('Country es requerido').nullable(),
	fecha: Yup.date().required(),
	states: Yup.array().required('Paises es requerido')
});

const AdminLayout = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { name: '', country: '', fecha: new Date(), states: [] },
		resolver: yupResolver(schemaValidation)
	});

	const options = [
		{ code: 'NY', name: 'New York' },
		{ code: 'RM', name: 'Rome' },
		{ code: 'LDN', name: 'London' },
		{ code: 'IST', name: 'Istanbul' },
		{ code: 'PRS', name: 'Paris' }
	];

	const onSubmit = data => console.log(data);

	return (
		<SidebarProvider>
			<SidebarPos />
			<Navbar />
			<main className='m-2 border px-2'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='grid'>
						<Input
							control={control}
							name='name'
							placeholder='Ingresa tu nombre'
							errors={errors}
						/>
					</div>
					<div className='grid'>
						<InputDate
							control={control}
							name='fecha'
							placeholder='Ingresa tu fecha'
							errors={errors}
						/>
					</div>
					<div className='grid'>
						<InputSelect
							control={control}
							name='country'
							placeholder='Seleccione su departamento'
							options={options}
							errors={errors}
						/>
					</div>
					<div className='grid'>
						<SelectMulti
							control={control}
							name='state'
							placeholder='Seleccione su pais'
							options={options}
							errors={errors}
						/>
					</div>
					<button type='submit'>Guardar</button>
				</form>
			</main>
		</SidebarProvider>
	);
};

export default AdminLayout;
