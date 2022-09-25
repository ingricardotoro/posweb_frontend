import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../lib/hooks/auth/useAuth';

const PrivateRoute = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();

	return allowedRoles?.includes(auth?.user?.rol) ? (
		<Outlet />
	) : (
		<Navigate to='/' state={{ from: location }} replace />
	);
};

export default PrivateRoute;
