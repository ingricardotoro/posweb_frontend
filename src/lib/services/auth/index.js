import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';

export const getAuthenticatedUser = createAsyncThunk(
	'authUser',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('auth/user');
			const data = response.data.data;
			const { person = {} } = data.employee;
			let authenticatedUser = {
				...data,
				avatar: `${person.name.charAt(0)}${person.lastName.charAt(0)}`
			};

			return authenticatedUser;
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

export const updateAuthenticatedUser = createAsyncThunk(
	'authUser/update',
	async ({ updatedProfileData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`auth/profile`,
				updatedProfileData
			);

			if (response.data.ok) {
				toast.success('Perfil de usuario actualizado exitosamente');

				navigate('/admin', { replace: true });

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

export const logout = createAsyncThunk(
	'authUser/logout',
	async ({ navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post('auth/logout');

			if (response.data.ok) {
				navigate('/');
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
