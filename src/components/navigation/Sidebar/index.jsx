import { Sidebar } from 'primereact/sidebar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';

const SidebarPos = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);

	return (
		<Sidebar visible={visible} onHide={toggleSidebar}>
			<h3>PosWeb</h3>
			<hr />
			<ul>
				<li className='font-bold'>
					<Link to='users'>Usuarios</Link>
				</li>
			</ul>
		</Sidebar>
	);
};

export default SidebarPos;
