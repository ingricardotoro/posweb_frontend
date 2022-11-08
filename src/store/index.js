import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth';
import categoryReducer from './categories';
import customerReducer from './customers';
import productReducer from './products';
import supplierReducer from './suppliers';
import userReducer from './users';

export const store = configureStore({
	reducer: {
		auth: authUserReducer,
		user: userReducer,
		customer: customerReducer,
		supplier: supplierReducer,
		category: categoryReducer,
		product: productReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
