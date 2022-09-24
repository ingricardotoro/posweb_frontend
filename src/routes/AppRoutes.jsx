import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';
import { ROLES } from '../lib/constants/roles';
import Login from '../pages/auth';
import Misssing from '../pages/Missing';
import UsersPage from '../pages/Users';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Login />} />
				{/** Admin Routes */}
				<Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
					<Route path='admin' element={<AdminLayout />}>
						<Route path='users' element={<UsersPage />} />
					</Route>
				</Route>
				<Route path='*' element={<Misssing />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
