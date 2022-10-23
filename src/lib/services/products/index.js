import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';
import { selecProductsMapper } from '../../mappers/products/products-select.mapper';
import { productsMapper } from '../../mappers/products/products.mapper';

export const getProducts = createAsyncThunk(
	'products/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('products');
			const data = [...response.data.data];

			let products = data.map(product => productsMapper(product));

			return products;
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

export const getSelectProducts = createAsyncThunk(
	'products/select',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('products');
			const data = [...response.data.data];

			let products = data.map(product => selecProductsMapper(product));

			return products;
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

export const createProduct = createAsyncThunk(
	'products/createProduct',
	async ({ createdProductData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post(
				'products',
				createdProductData
			);
			if (response.data.ok) {
				toast.success('Producto agregado exitosamente');

				navigate('/admin/productos', { replace: true });

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

export const updateProduct = createAsyncThunk(
	'products/updateProduct',
	async ({ id, updatedProductData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`products/${id}`,
				updatedProductData
			);

			if (response.data.ok) {
				toast.success('Producto actualizado exitosamente');

				navigate('/admin/productos', { replace: true });

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

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`products/${id}`);

			if (response.data.ok) {
				toast.success('Producto eliminado exitosamente');

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
