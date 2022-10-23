import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';
import { selectCategoriesMapper } from '../../mappers/categories/categories-select.mapper';
import { categoriesMapper } from '../../mappers/categories/categories.mapper';

export const getCategories = createAsyncThunk(
	'categories/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('categories');
			const data = [...response.data.data];
			let categories = data.map(category => categoriesMapper(category));

			return categories;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}
			return rejectWithValue(message);
		}
	}
);

export const getSelectCategories = createAsyncThunk(
	'categories/select',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('categories');
			const data = [...response.data.data];
			let categories = data.map(category => selectCategoriesMapper(category));

			return categories;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}
			return rejectWithValue(message);
		}
	}
);

export const createCategory = createAsyncThunk(
	'categories/createCategory',
	async ({ createdCategoryData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post(
				'categories',
				createdCategoryData
			);
			if (response.data.ok) {
				toast.success('Categoria agregada exitosamente');

				navigate('/admin/categorias', { replace: true });

				return response.data;
			}

			return response.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);

export const updateCategory = createAsyncThunk(
	'categories/updateCategory',
	async ({ id, updatedCategoryData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`categories/${id}`,
				updatedCategoryData
			);

			if (response.data.ok) {
				toast.success('Categoria actualizada exitosamente');

				navigate('/admin/categorias', { replace: true });

				return response.data.data;
			}

			return response.data.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);

export const deleteCategory = createAsyncThunk(
	'categories/deleteCategory',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`categories/${id}`);

			if (response.data.ok) {
				toast.success('Categoría eliminada exitosamente');

				return response.data;
			}

			return response.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);
