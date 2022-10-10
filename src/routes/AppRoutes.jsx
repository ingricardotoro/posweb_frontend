import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';
import { ROLES } from '../lib/constants/roles';
import Login from '../pages/auth';
import Customers from '../pages/Customers';
import CustomerForm from '../pages/Customers/form';
import Misssing from '../pages/Missing';
import Suppliers from '../pages/Suppliers';
import SupplierForm from '../pages/Suppliers/form';
import UsersPage from '../pages/Users';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Login />} />
				{/** Admin Routes */}
				<Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
					<Route path='admin' element={<AdminLayout />}>
						<Route path='usuarios' element={<UsersPage />} />
						<Route path='clientes' element={<Customers />} />
						<Route path='clientes/:action' element={<CustomerForm />} />
						<Route path='proveedores' element={<Suppliers />} />
						<Route path='proveedores/:action' element={<SupplierForm />} />
					</Route>
				</Route>
				<Route path='*' element={<Misssing />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
