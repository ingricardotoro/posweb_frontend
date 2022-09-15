import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);

	const toggleSidebar = () => setVisible(!visible);

	const value = {
		visible,
		toggleSidebar
	};

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
};
