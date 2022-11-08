import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';
import useAuthenticatedUser from '../../../lib/hooks/auth/useAuthenticatedUser';

const ProfileMenu = () => {
	
	const { handleLogout, authenticatedUser } = useAuthenticatedUser();

	return (
		<div className='flex-end'>
			<Link to='/'>
				<Avatar label={authenticatedUser?.avatar || 'US'} />
			</Link>
			<Link
				className='p-4 md:p-1 rounded-full font-medium text-center ml-2'
				onClick={handleLogout}
			>
				<i className='pi pi-power-off mx-1' style={{ fontSize: '1em' }}></i>
				Cerrar Sesión
			</Link>
		</div>
	);
};

export default ProfileMenu;
