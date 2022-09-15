import ProfileMenu from './ProfileMenu';
import TitleMenu from './TitleMenu';

const Navbar = () => {
	return (
		<nav className='drop-shadow-md border w-full'>
			<div className='flex items-center justify-between mx-2 my-4'>
				<TitleMenu />
				<ProfileMenu />
			</div>
		</nav>
	);
};

export default Navbar;
