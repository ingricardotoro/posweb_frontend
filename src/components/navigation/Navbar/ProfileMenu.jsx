import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';

const profile = [
	{ label: 'Perfil', icon: 'pi pi-faw pi-user', to: '/perfil' },
	{ label: 'Configuraciones', icon: 'pi pi-faw pi-cog', to: '/config' },
	{ label: 'Cerrar Sesión', icon: 'pi pi-faw pi-power-off', to: '/logout' }
];

const ProfileMenu = () => {
	const showMenu = useRef(null);

	return (
		<div className='flex-end'>
			<Avatar label='ES' onClick={evt => showMenu.current.toggle(evt)} />
			<Menu model={profile} ref={showMenu} popup />
		</div>
	);
};

export default ProfileMenu;
