import { createSlice } from '@reduxjs/toolkit';
import {
	createCategory,
	deleteCategory,
	getCategories,
	getSelectCategories,
	updateCategory
} from '../../lib/services/categories';

const initialState = {
	currentCategory: {},
	categories: [],
	selectCategories: [],
	error: '',
	loading: false
};

const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createCategory.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createCategory.fulfilled, (state, action) => {
				state.loading = false;
				state.categories = [action.payload];
			})
			.addCase(createCategory.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.categories = [...action.payload];
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getSelectCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.selectCategories = [...action.payload];
			})
			.addCase(getSelectCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateCategory.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateCategory.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.categories = state.categories.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateCategory.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteCategory.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteCategory.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.categories = state.categories.filter(item => item.id !== id);
				}
			})
			.addCase(deleteCategory.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
