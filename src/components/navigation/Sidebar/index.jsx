import { Sidebar } from 'primereact/sidebar';
import { useContext } from 'react';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';
import useAuth from '../../../lib/hooks/auth/useAuth';
import AdminMenu from './AdminMenu';
import VentasMenu from './VentasMenu';

const CurrentMenu = (rol) => {
	switch (rol) {
		case 'Admin':
			return <AdminMenu />

		case 'Mesero':
		case 'Cajero':
			return <VentasMenu />

		default:
			return <AdminMenu />;
	}
}

const SidebarPos = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);
	const { auth } = useAuth();

	return (
		<Sidebar visible={visible} onHide={toggleSidebar}>
			{
				CurrentMenu(auth.user?.rol)
			}
		</Sidebar>
	);
};

export default SidebarPos;
