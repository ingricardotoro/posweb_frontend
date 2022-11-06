const Order = () => {
	return (
		<div className='bg-[#262837] p-4 rounded-xl mb-4'>
			<div className='grid grid-cols-6 mb-4'>
				<div className='col-span-4 flex items-center gap-3'>
					<img
						src='https://cdn.shopify.com/s/files/1/0273/1733/8214/products/ArrozFuriwa_1024x1024@2x.jpg?v=1587935665'
						alt='menu'
						className='w-10 h-10 object-cover'
					/>
					<div>
						<h5 className='text-sm'>Arroz</h5>
						<p className='text-xs text-gray-500'>L 248.00</p>
					</div>
				</div>
				<div>
					<span>2</span>
				</div>
				<div>
					<span>L248</span>
				</div>
			</div>
			<div className='grid grid-cols-6 items-center'>
				<form className='col-span-5'>
					<input
						type='text'
						className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
						placeholder='Order note...'
					/>
				</form>
				<div>
					<button className='p-2'>
						<i className='pi pi-trash text-red-600'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
