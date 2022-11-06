const HeaderMenu = () => {
	return (
		<header>
			<section className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 mx-2'>
				<div>
					<h2 className='text-2xl text-gray-300'>Jorge Castillo</h2>
					<p className='text-gray-500'>{new Date().toLocaleDateString()}</p>
				</div>
			</section>
		</header>
	);
};

export default HeaderMenu;
