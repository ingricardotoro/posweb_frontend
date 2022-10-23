import { createSlice } from '@reduxjs/toolkit';
import {
	createProduct,
	deleteProduct,
	getProducts,
	getSelectProducts,
	updateProduct
} from '../../lib/services/products';

const initialState = {
	currentProduct: {},
	products: [],
	selectProducts: [],
	error: '',
	loading: false
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCurrentProduct: (state, action) => {
			state.currentProduct = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createProduct.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.products = [action.payload];
			})
			.addCase(createProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = [...action.payload];
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getSelectProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.selectProducts = [...action.payload];
			})
			.addCase(getSelectProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateProduct.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.products = state.products.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteProduct.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.products = state.products.filter(item => item.id !== id);
				}
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
