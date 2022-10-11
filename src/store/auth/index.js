import { createSlice } from '@reduxjs/toolkit';
import {
	getAuthenticatedUser,
	logout,
	updateAuthenticatedUser
} from '../../lib/services/auth';

const initialState = {
	authenticatedUser: {},
	error: '',
	loading: false
};

const authUserSlice = createSlice({
	name: 'authUser',
	initialState,
	reducers: {
		setCurrentAuthenticatedUser: (state, action) => {
			state.authenticatedUser = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getAuthenticatedUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getAuthenticatedUser.fulfilled, (state, action) => {
				state.loading = false;
				state.authenticatedUser = action.payload;
			})
			.addCase(getAuthenticatedUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateAuthenticatedUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateAuthenticatedUser.fulfilled, (state, action) => {
				state.loading = false;
				state.authenticatedUser = action.payload;
			})
			.addCase(updateAuthenticatedUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(logout.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.loading = false;
				state.authenticatedUser = {};
			})
			.addCase(logout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentAuthenticatedUser } = authUserSlice.actions;
export default authUserSlice.reducer;
