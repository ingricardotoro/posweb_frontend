import { Button } from 'primereact/button';
import {
	Input,
	InputID,
	InputRtn,
	InputSelect
} from '../../../components/commons/forms';
import useFormCustomer from './hook/useForm';

const CustomerForm = () => {
	const { control, onSubmit, handleSubmit, errors } = useFormCustomer();
	return (
		<article className='flex flex-col items-center'>
			<h4 className='font-bold capitalize underline mb-4'>Cliente</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-wrap -mx-3 md:mb-2 md:px-2'>
					<div className='w-full md:w-1/3 px-1 mb-6 md:mb-0'>
						<Input
							control={control}
							errors={errors}
							name='name'
							placeholder='Ingresa tu nombre'
						/>
					</div>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<Input
							control={control}
							errors={errors}
							name='lastname'
							placeholder='Ingresa tu apellido'
						/>
					</div>
					<div className='w-full md:w-1/3 px-1 mb-6 md:mb-0'>
						<Input
							control={control}
							errors={errors}
							name='email'
							placeholder='Ingresa tu correo'
						/>
					</div>
					<div className='w-full md:w-1/3 px-1 mb-6 md:mb-0'>
						<InputSelect
							control={control}
							errors={errors}
							name='gender'
							options={[
								{ code: 'Male', name: 'Masculino' },
								{ code: 'Female', name: 'Femenino' }
							]}
							placeholder='Ingresa tu genero'
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-3 mb-2'>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<InputRtn
							control={control}
							errors={errors}
							name='rtn'
							placeholder='Ingresa tu rtn'
						/>
					</div>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<InputID
							control={control}
							errors={errors}
							name='identidad'
							placeholder='Ingresa tu identidad'
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-3 mb-2'>
					<Button
						type='submit'
						className='mx-auto flex bg-purple-600 hover:bg-purple-700 text-white font-bold px-2 py-3 rounded shadow-lg hover:shadow-xl transition duration-200'
					>
						Agregar Cliente
					</Button>
				</div>
			</form>
		</article>
	);
};

export default CustomerForm;
