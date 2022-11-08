import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';
import { ROLES } from '../lib/constants/roles';

import Login from '../pages/auth';
import Categories from '../pages/Categories';
import CategoryForm from '../pages/Categories/form';
import Customers from '../pages/Customers';
import CustomerForm from '../pages/Customers/form';
import Misssing from '../pages/Missing';
import Products from '../pages/Products';
import ProductsForm from '../pages/Products/form';
import CashOrders from '../pages/sales/cash-orders';
import TableOrders from '../pages/sales/table-orders';
import WebOrders from '../pages/sales/web-orders';
import Suppliers from '../pages/Suppliers';
import SupplierForm from '../pages/Suppliers/form';
import Users from '../pages/Users';
import UserForm from '../pages/Users/form';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Login />} />
				{/** Admin Routes */}
				<Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
					<Route path='admin' element={<AdminLayout />}>
						<Route path='usuarios' element={<Users />} />
						<Route path='usuarios/:action' element={<UserForm />} />
						<Route path='clientes' element={<Customers />} />
						<Route path='clientes/:action' element={<CustomerForm />} />
						<Route path='proveedores' element={<Suppliers />} />
						<Route path='proveedores/:action' element={<SupplierForm />} />
						<Route path='categorias' element={<Categories />} />
						<Route path='categorias/:action' element={<CategoryForm />} />
						<Route path='productos' element={<Products />} />
						<Route path='productos/:action' element={<ProductsForm />} />
					</Route>
				</Route>
				{/** Mesero, Cajero Routes */}
				<Route element={<PrivateRoute allowedRoles={[ROLES.MESERO, ROLES.CAJERO]} />}>
					<Route path='ventas' element={<AdminLayout />}>
						<Route path='caja' element={<CashOrders />} />
						<Route path='pedidos-web' element={<WebOrders />} />
						<Route path='pedidos-mesa' element={<TableOrders />} />
					</Route>
				</Route>
				<Route path='*' element={<Misssing />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
