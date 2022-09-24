import { useContext } from 'react';
import { SidebarContext } from '../../../lib/context/theme/SidebarContext';

const TitleMenu = () => {
	const { visible, toggleSidebar } = useContext(SidebarContext);

	return (
		<div className='flex'>
			<i
				onClick={toggleSidebar}
				className={
					visible ? 'pi pi-faw pi-align-left' : 'pi pi-faw pi-align-right'
				}
				style={{ fontSize: '1.5em' }}
			></i>
			<h1 className='ml-2 font-sans font-semibold'>PosWeb</h1>
		</div>
	);
};

export default TitleMenu;
