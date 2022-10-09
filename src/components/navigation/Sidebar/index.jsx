import { Sidebar } from 'primereact/sidebar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';

const SidebarPos = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);

	return (
		<Sidebar visible={visible} onHide={toggleSidebar}>
			<Link to='/admin' className='font-bold text-2xl'>
				PosWeb
			</Link>
			<hr />
			<ul className='mt-2'>
				<li className='text-gray-500  flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
					<Link to='usuarios' onClick={toggleSidebar}>
						Usuarios
					</Link>
				</li>
				<li className='text-gray-500 flex items-center gap-4 hover:bg-purple-600 hover:text-white py-3 px-4 rounded-xl transition-colors'>
					<Link to='clientes' onClick={toggleSidebar}>
						Clientes
					</Link>
				</li>
			</ul>
		</Sidebar>
	);
};

export default SidebarPos;
