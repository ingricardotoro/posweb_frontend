import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth';
import customerReducer from './customers';
import supplierReducer from './suppliers';

export const store = configureStore({
	reducer: {
		auth: authUserReducer,
		customer: customerReducer,
		supplier: supplierReducer
	}
});
