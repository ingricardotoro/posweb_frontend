import { Sidebar } from 'primereact/sidebar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';

const SidebarPos = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);

	return (
		<Sidebar visible={visible} onHide={toggleSidebar}>
			<h3 className='font-bold text-xl'>PosWeb</h3>
			<hr />
			<ul className='mt-2'>
				<li className='font-bold'>
					<Link to='usuarios'>Usuarios</Link>
				</li>
				<li className='font-bold'>
					<Link to='clientes'>Clientes</Link>
				</li>
			</ul>
		</Sidebar>
	);
};

export default SidebarPos;
