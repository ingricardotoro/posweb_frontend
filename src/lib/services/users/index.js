import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';

export const getUsers = createAsyncThunk(
	'users/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('users');
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

export const createCustomer = createAsyncThunk(
	'Users/createCustomer',
	async ({ createdCustomerData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post('users', createdCustomerData);

			toast.current.show({
				severity: 'success',
				summary: 'Successful',
				detail: 'Cliente agregado exitosamente',
				life: 3000
			});

			navigate('/clientes');

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

export const updateCustomer = createAsyncThunk(
	'Users/updateCustomer',
	async ({ id, updatedCustomerData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.patch(
				`Users/${id}`,
				updatedCustomerData
			);

			toast.current.show({
				severity: 'success',
				summary: 'Successful',
				detail: 'Cliente actualizado exitosamente',
				life: 3000
			});

			navigate('/clientes');

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

export const deleteCustomer = createAsyncThunk(
	'Users/deleteCustomer',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`Users/${id}`);

			toast.current.show({
				severity: 'success',
				summary: 'Successful',
				detail: 'Cliente eliminado exitosamente',
				life: 3000
			});
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
