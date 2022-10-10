import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customers';
import supplierReducer from './suppliers';

export const store = configureStore({
	reducer: {
		customer: customerReducer,
		supplier: supplierReducer
	}
});
