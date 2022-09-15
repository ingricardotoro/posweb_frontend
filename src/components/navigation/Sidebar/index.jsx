import { Sidebar } from 'primereact/sidebar';
import { useContext } from 'react';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';

const SidebarPos = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);
	return (
		<aside>
			<Sidebar visible={visible} onHide={toggleSidebar}>
				<h3>PosWeb</h3>
			</Sidebar>
		</aside>
	);
};

export default SidebarPos;
