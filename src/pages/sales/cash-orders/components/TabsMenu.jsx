const TabsMenu = ({ activeMenu, setActiveMenu }) => {
	return (
		<nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 mx-2'>
			<button
				onClick={() => setActiveMenu(0)}
				className={`py-2 pr-4 ${
					activeMenu === 0 &&
					'relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:rounded-full before:bottom-[1px] text-[#ec7c6a]'
				}`}
			>
				Arroz
			</button>
			<button
				onClick={() => setActiveMenu(1)}
				className={`py-2 pr-4 ${
					activeMenu === 1 &&
					'relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:rounded-full before:bottom-[1px] text-[#ec7c6a]'
				}`}
			>
				Chop Suey
			</button>
			<button
				onClick={() => setActiveMenu(2)}
				className={`py-2 pr-4 ${
					activeMenu === 2 &&
					'relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:rounded-full before:bottom-[1px] text-[#ec7c6a]'
				}`}
			>
				Bebidas
			</button>
		</nav>
	);
};

export default TabsMenu;
