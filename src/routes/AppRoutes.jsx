import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';
import { ROLES } from '../lib/constants/roles';
import { NotificationProvider } from '../lib/context/theme/NotificationContext';
import Login from '../pages/auth';
import Customers from '../pages/Customers';
import CustomerForm from '../pages/Customers/form';
import Misssing from '../pages/Missing';
import UsersPage from '../pages/Users';

function AppRoutes() {
	return (
		<NotificationProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Login />} />
					{/** Admin Routes */}
					<Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
						<Route path='admin' element={<AdminLayout />}>
							<Route path='usuarios' element={<UsersPage />} />
							<Route path='clientes' element={<Customers />} />
							<Route path='clientes/:action' element={<CustomerForm />} />
						</Route>
					</Route>
					<Route path='*' element={<Misssing />} />
				</Route>
			</Routes>
		</NotificationProvider>
	);
}

export default AppRoutes;
