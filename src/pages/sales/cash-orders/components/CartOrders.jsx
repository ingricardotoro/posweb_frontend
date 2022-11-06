import Order from './Order';

const CartOrders = ({ showOrder, setShowOrder }) => {
	return (
		<div
			className={`bg-[#1F1D2B] lg:col-span-2 fixed top-16 w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
				showOrder ? 'right-0' : '-right-full'
			}`}
		>
			<div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
				<span
					onClick={() => setShowOrder(false)}
					className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'
				>
					<i className='pi pi-times-circle' style={{ fontSize: '2em' }}></i>
				</span>
				<h2 className='text-2xl my-4'>Orders #151416</h2>
				<div>
					<div className='grid grid-cols-6 mb-4 p-4'>
						<h5 className='col-span-4'>Item</h5>
						<h5>Cant</h5>
						<h5>Precio</h5>
					</div>
					<div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll'>
						<Order />
						<Order />
						<Order />
						<Order />
					</div>
				</div>
				<div className='absolute w-full botton-0 left-0 p-4'>
					<div className='flex items-center justify-between mb 4'>
						<span className='text-gray-400'>Descuento</span>
						<span>L0</span>
					</div>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Subtotal</span>
						<span>L248.00</span>
					</div>
					<div>
						<button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg'>
							Continuar el pago
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartOrders;
