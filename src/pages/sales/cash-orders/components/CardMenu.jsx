const CardMenu = ({ image, price }) => {
	return (
		<article className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
			<img
				src={image}
				alt='menu'
				className='w-48 h-48 object-cover -mt-20 shadow-2xl rounded-full'
			/>
			<p className='text-xl'>Descripcion</p>
			<span className='text-gray-400'>L {price}</span>
			<p className='text-gray-600'>50 disponibles</p>
		</article>
	);
};

export default CardMenu;
