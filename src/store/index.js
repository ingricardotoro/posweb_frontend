import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customers';

export const store = configureStore({
	reducer: {
		customer: customerReducer
	}
});
