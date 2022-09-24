import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '../../lib/context/theme/SidebarContext';
import Navbar from '../navigation/Navbar';
import SidebarPos from '../navigation/Sidebar';

const AdminLayout = () => {
	return (
		<SidebarProvider>
			<SidebarPos />
			<Navbar />
			<main className='m-2 border px-2'>
				<Outlet />
			</main>
		</SidebarProvider>
	);
};

export default AdminLayout;
