import { BrowserRouter } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';

function App() {
	return (
		<BrowserRouter>
			<AdminLayout />
		</BrowserRouter>
	);
}

export default App;
