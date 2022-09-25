import { createSlice } from '@reduxjs/toolkit';
import {
	createCustomer,
	deleteCustomer,
	getCustomers,
	updateCustomer
} from '../../lib/services/customers';

const initialState = {
	customer: {},
	customers: [],
	error: '',
	loading: false
};

const customerSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {
		setCurrentCustomer: (state, action) => {
			state.customer = action.payload;
		}
	},
	extraReducers: {
		[createCustomer.pending]: (state, action) => {
			state.loading = true;
		},
		[createCustomer.fulfilled]: (state, action) => {
			state.loading = false;
			state.customers = [action.payload];
		},
		[createCustomer.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[getCustomers.pending]: (state, action) => {
			state.loading = true;
		},
		[getCustomers.fulfilled]: (state, action) => {
			state.loading = false;
			state.customers = action.payload;
		},
		[getCustomers.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[updateCustomer.pending]: (state, action) => {
			state.loading = true;
		},
		[updateCustomer.fulfilled]: (state, action) => {
			state.loading = false;
			const {
				arg: { id }
			} = action.meta;
			const index = state.findIndex(customer => customer.id === id);
			state[index] = {
				...state[index],
				...action.payload
			};
		},
		[updateCustomer.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[deleteCustomer.pending]: (state, action) => {
			state.loading = true;
		},
		[deleteCustomer.fulfilled]: (state, action) => {
			state.loading = false;
			const {
				arg: { id }
			} = action.meta;
			if (id) {
				state.customers = state.customers.filter(
					customer => customer.id !== id
				);
			}
		},
		[deleteCustomer.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		}
	}
});

export const { setCurrentCustomer } = customerSlice.actions;
export default customerSlice.reducer;
