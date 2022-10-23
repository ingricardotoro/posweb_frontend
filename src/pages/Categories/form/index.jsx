import { Button } from 'primereact/button';
import { Input } from '../../../components/commons/forms';
import useFormCategory from './hook/useForm';

const CategoryForm = () => {
	const { control, onSubmit, handleSubmit, errors, action } = useFormCategory();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<article className='md:grid md:grid-cols-3 md:gap-6'>
				<section className='mt-4 md:col-span-2'>
					<div className='shadow sm:overflow-hidden sm:rounded-md'>
						<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='nameCategory'
										label='nombre'
										placeholder='Ingresa nombre'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='description'
										label='descripcion'
										placeholder='Ingresa descripcion'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='index'
										label='Indice'
										placeholder='Ingresa Indice'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='parentCode'
										label='Categoría padre'
										placeholder='Ingresa categoría padre'
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
							{action === 'Editar' ? 'Editar Categoría' : 'Agregar Categoría'}
						</Button>
					</div>
				</section>
			</article>
		</form>
	);
};

export default CategoryForm;
