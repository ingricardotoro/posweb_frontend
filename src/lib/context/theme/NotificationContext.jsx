import { createContext, useRef } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const toast = useRef(null);

	const notificationSuccess = message =>
		toast.current.show({
			severity: 'success',
			summary: 'Successful',
			detail: message,
			life: 3000
		});

	const value = {
		toast,
		notificationSuccess
	};

	return (
		<NotificationContext.Provider value={value}>
			{children}
		</NotificationContext.Provider>
	);
};
