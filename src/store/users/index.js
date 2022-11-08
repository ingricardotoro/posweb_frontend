import { createSlice } from '@reduxjs/toolkit';
import {
	createUser,
	deleteUser,
	getUsers,
	updateUser
} from '../../lib/services/users';

const initialState = {
	currentUser: {},
	users: [],
	error: '',
	loading: false
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.loading = false;
				state.users = [action.payload];
			})
			.addCase(createUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = [...action.payload];
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.users = state.users.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.users = state.users.filter(item => item.id !== id);
				}
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;
