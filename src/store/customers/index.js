import { createSlice } from '@reduxjs/toolkit';
import {
	createCustomer,
	deleteCustomer,
	getCustomers,
	updateCustomer
} from '../../lib/services/customers';

const initialState = {
	currentCustomer: {},
	customers: [],
	error: '',
	loading: false
};

const customerSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {
		setCurrentCustomer: (state, action) => {
			state.currentCustomer = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createCustomer.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createCustomer.fulfilled, (state, action) => {
				state.loading = false;
				state.customers = [action.payload];
			})
			.addCase(createCustomer.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getCustomers.fulfilled, (state, action) => {
				state.loading = false;
				state.customers = [...action.payload];
			})
			.addCase(getCustomers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateCustomer.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateCustomer.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.customers = state.customers.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateCustomer.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteCustomer.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteCustomer.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.customers = state.customers.filter(item => item.id !== id);
				}
			})
			.addCase(deleteCustomer.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentCustomer } = customerSlice.actions;
export default customerSlice.reducer;
