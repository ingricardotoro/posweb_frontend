import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';
import { suppliersMapper } from '../../mappers/suppliers/suppliers.mapper';

export const getSuppliers = createAsyncThunk(
	'suppliers/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('suppliers');
			const data = [...response.data.data];

			let suppliers = data.map(supplier => suppliersMapper(supplier));

			return suppliers;
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

export const createSupplier = createAsyncThunk(
	'suppliers/createSupplier',
	async ({ createdSupplierData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post(
				'Suppliers',
				createdSupplierData
			);
			if (response.data.ok) {
				toast.success('Proveedor agregado exitosamente');

				navigate('/admin/proveedores', { replace: true });

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

export const updateSupplier = createAsyncThunk(
	'suppliers/updateSupplier',
	async ({ id, updatedSupplierData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`suppliers/${id}`,
				updatedSupplierData
			);

			if (response.data.ok) {
				toast.success('Proveedor actualizado exitosamente');

				navigate('/admin/proveedores', { replace: true });

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

export const deleteSupplier = createAsyncThunk(
	'suppliers/deleteSupplier',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`suppliers/${id}`);

			if (response.data.ok) {
				toast.success('Proveedor eliminado exitosamente');

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
