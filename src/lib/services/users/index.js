import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';
import { usersMapper } from '../../mappers/users/users.mapper';

export const getUsers = createAsyncThunk(
	'users/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('admin/users');
			const data = [...response.data.data];

			let users = data.map(user => usersMapper(user));

			return users;
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

export const createUser = createAsyncThunk(
	'Users/createUser',
	async ({ createdUserData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post('admin/users', createdUserData);

			if(response.data.ok) {

				toast.success('Usuario agregado exitosamente')
	
				navigate('/admin/usuarios', { replace: true });

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

export const updateUser = createAsyncThunk(
	'Users/updateUser',
	async ({ id, updatedUserData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`admin/users/${id}`,
				updatedUserData
			);
			
			if(response.data.ok) {
				
				toast.success('Usuario actualizado exitosamente')
			
				navigate('/admin/usuarios', { replace: true });
				
				return response.data.data;
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

export const deleteUser = createAsyncThunk(
	'Users/deleteUser',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`admin/users/${id}`);

			if(response.data.ok) {
				toast.success('Cuenta configurada exitosamente')
			
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
