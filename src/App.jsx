import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/auth';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
