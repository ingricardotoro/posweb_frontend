import { Button } from 'primereact/button';
import {
	Input,
	InputDate,
	InputID,
	InputPassword,
	InputPhoneNumber,
	InputRtn,
	InputSelect
} from '../../../components/commons/forms';
import { genders } from '../../../lib/constants/genders';
import { roles } from '../../../lib/constants/roles-admin';
import { states } from '../../../lib/constants/states';
import useFormUser from './hook/useForm';

const UserForm = () => {
	const { control, onSubmit, handleSubmit, errors, action } = useFormUser();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<article className='md:grid md:grid-cols-3 md:gap-6'>
				<section className='md:col-span-1'>
					<div className='px-4 m-4 sm:px-0'>
						<h4 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
							Información personal
						</h4>

						<p className='mt-1 text-sm leading-5 text-gray-600'>
							Información personal del usuario
						</p>
					</div>
				</section>
				<section className='mt-4 md:col-span-2'>
					<div className='shadow sm:overflow-hidden sm:rounded-md'>
						<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='name'
										label='nombre'
										placeholder='Ingresa nombre'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='lastName'
										label='apellido'
										placeholder='Ingresa apellido'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputID
										control={control}
										errors={errors}
										name='identidad'
										label='No Identidad'
										placeholder='Ingresa identidad'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputRtn
										control={control}
										errors={errors}
										name='rtn'
										label='RTN'
										placeholder='Ingresa rtn'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputPhoneNumber
										control={control}
										errors={errors}
										name='phone1'
										label='Teléfono'
										placeholder='Ingresa teléfono'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputPhoneNumber
										control={control}
										errors={errors}
										name='phone2'
										label='Teléfono'
										placeholder='Ingresa movil (Opcional)'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='email'
										placeholder='Ingresa correo'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputDate
										control={control}
										errors={errors}
										name='birth'
										label='Fecha de nacimiento'
										placeholder='Ingresa fecha de nacimiento'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputSelect
										control={control}
										errors={errors}
										name='gender'
										options={genders}
										label='Genero'
										placeholder='Seleccione genero'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='md:col-span-1'>
					<div className='px-4 m-4 sm:px-0'>
						<h4 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
							Información comercial
						</h4>

						<p className='mt-1 text-sm leading-5 text-gray-600'>
							Información comercial del usuario
						</p>
					</div>
				</section>
				<section className='mt-4 md:col-span-2'>
					<div className='shadow sm:overflow-hidden sm:rounded-md'>
						<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<InputSelect
										control={control}
										errors={errors}
										name='country'
										options={states}
										label='Departamento'
										placeholder='Seleccione departamento'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='city'
										label='Ciudad'
										placeholder='Ingresa ciudad'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='location'
										label='Dirección'
										placeholder='Ingresa ubicación'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='md:col-span-1'>
					<div className='px-4 m-4 sm:px-0'>
						<h4 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
							Información del sistema
						</h4>

						<p className='mt-1 text-sm leading-5 text-gray-600'>
							Información cuenta del usuario
						</p>
					</div>
				</section>
				<section className='mt-4 md:col-span-2'>
					<div className='shadow sm:overflow-hidden sm:rounded-md'>
						<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<InputSelect
										control={control}
										errors={errors}
										name='rol'
										options={roles}
										label='Rol de usuario'
										placeholder='Seleccione rol'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='username'
										placeholder='Ingresa nombre de usuario'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputPassword
										control={control}
										errors={errors}
										name='password'
										label='Contraseña'
										placeholder='Ingresa contraseña'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputPassword
										control={control}
										errors={errors}
										name='passwordConfirm'
										label='Confirmar contraseña'
										placeholder='Repetir contraseña'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='mt-4 md:col-span-2 mb-4'>
					<div className='grid grid-cols-6 gap-6'>
						<Button
							type='submit'
							className='mx-auto col-span-6 sm:col-span-3 bg-purple-600 hover:bg-purple-700 text-white font-bold px-2 py-3 rounded shadow-lg hover:shadow-xl transition duration-200'
						>
							{action === 'Editar' ? 'Editar Usuario' : 'Agregar Usuario'}
						</Button>
					</div>
				</section>
			</article>
		</form>
	);
};

export default UserForm;
