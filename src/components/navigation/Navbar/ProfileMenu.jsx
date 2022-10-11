import { Avatar } from 'primereact/avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthenticatedUser from '../../../lib/hooks/auth/useAuthenticatedUser';

const ProfileMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const { handleLogout, authenticatedUser } = useAuthenticatedUser();

	return (
		<div className='flex-end'>
			<Avatar
				label={authenticatedUser?.avatar || 'US'}
				onClick={() => setShowMenu(!showMenu)}
			/>
			<div
				className={
					showMenu
						? 'grid grid-rows-4 items-center border-2 rounded-md z-50 mt-2'
						: 'hidden'
				}
			>
				<Link
					className='p-4 md:p-1 rounded-full font-medium text-center'
					to='perfil'
				>
					<i className='pi pi-user' style={{ fontSize: '1em' }}></i> Perfil
				</Link>
				<Link
					className='p-4 md:p-1 rounded-full font-medium text-center'
					to='perfil'
				>
					<i className='pi pi-cog mx-2' style={{ fontSize: '1em' }}></i>
					Configuraciones
				</Link>
				<Link
					className='p-4 md:p-1 rounded-full font-medium text-center'
					onClick={handleLogout}
				>
					<i className='pi pi-power-off mx-1' style={{ fontSize: '1em' }}></i>
					Cerrar Sesión
				</Link>
			</div>
		</div>
	);
};

export default ProfileMenu;
