import { Button } from 'primereact/button';
import {
	Input,
	InputCurrency,
	InputDate,
	InputSelect,
	NumberInput
} from '../../../components/commons/forms';
import useFormSupplier from './hook/useForm';

const ProductForm = () => {
	const {
		control,
		onSubmit,
		handleSubmit,
		errors,
		action,
		suppliers,
		categories
	} = useFormSupplier();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<article className='md:grid md:grid-cols-3 md:gap-6'>
				<section className='md:col-span-1'>
					<div className='px-4 m-4 sm:px-0'>
						<h4 className='text-xl font-medium pr-2 leading-5 text-gray-800'>
							Información personal
						</h4>

						<p className='mt-1 text-sm leading-5 text-gray-600'>
							Información personal del proveedor
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
										placeholder='Ingresa nombre del producto'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputCurrency
										control={control}
										errors={errors}
										name='price1'
										label='precio de venta'
										placeholder='Ingresa precio de venta'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputCurrency
										control={control}
										errors={errors}
										name='price2'
										label='Precio minorista'
										placeholder='Ingresa precio a minoristas (Opcional)'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputCurrency
										control={control}
										errors={errors}
										name='price3'
										label='precio a mayorista'
										placeholder='Ingresa precio a mayoristas (Opcional)'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputCurrency
										control={control}
										errors={errors}
										name='price4'
										label='precio con descuento'
										placeholder='Ingresa precio con descuento o promoción (Opcional)'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputCurrency
										control={control}
										errors={errors}
										name='cost'
										label='costo'
										placeholder='Ingresa costo del producto'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputDate
										control={control}
										errors={errors}
										name='expiredDate'
										label='Fecha de vencimiento'
										placeholder='Ingresa fecha de vencimiento'
									/>
								</div>
								<div className='col-span-12 sm:col-span-3'>
									<Input
										control={control}
										errors={errors}
										name='description'
										label='descripción'
										placeholder='Ingresa descripción del producto'
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
							Información comercial del producto
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
										name='category'
										options={categories}
										label='Categoría'
										placeholder='Seleccione categoría'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<InputSelect
										control={control}
										errors={errors}
										name='supplier'
										options={suppliers}
										label='Proveedor'
										placeholder='Seleccione proveedor'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<NumberInput
										control={control}
										errors={errors}
										name='inStock'
										label='Existencia en inventario'
										placeholder='Ingresa stock del producto'
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<NumberInput
										control={control}
										errors={errors}
										name='minCount'
										label='cantidad mínima del producto'
										placeholder='Ingresa cantidad mínima del producto'
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
							{action === 'Editar' ? 'Editar Producto' : 'Agregar Producto'}
						</Button>
					</div>
				</section>
			</article>
		</form>
	);
};

export default ProductForm;
