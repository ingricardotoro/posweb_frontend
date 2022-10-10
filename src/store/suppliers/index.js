import { createSlice } from '@reduxjs/toolkit';
import {
	createSupplier,
	deleteSupplier,
	getSuppliers,
	updateSupplier
} from '../../lib/services/suppliers';

const initialState = {
	currentSupplier: {},
	suppliers: [],
	error: '',
	loading: false
};

const supplierSlice = createSlice({
	name: 'suppliers',
	initialState,
	reducers: {
		setCurrentSupplier: (state, action) => {
			state.currentSupplier = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createSupplier.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createSupplier.fulfilled, (state, action) => {
				state.loading = false;
				state.suppliers = [action.payload];
			})
			.addCase(createSupplier.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getSuppliers.fulfilled, (state, action) => {
				state.loading = false;
				state.suppliers = [...action.payload];
			})
			.addCase(getSuppliers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateSupplier.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateSupplier.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.suppliers = state.suppliers.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateSupplier.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteSupplier.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteSupplier.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.suppliers = state.suppliers.filter(item => item.id !== id);
				}
			})
			.addCase(deleteSupplier.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
