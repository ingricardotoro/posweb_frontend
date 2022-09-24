import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './lib/context/auth/AuthProvider';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/*' element={<AppRoutes />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	);
}

export default App;
