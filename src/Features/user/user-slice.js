// DUCKS pattern
import { createSlice } from "@reduxjs/toolkit";

// set user initial state
const initialState = {
	token: null,
	roles: [],
	endSession: false,
};

// set user slice
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// set actions
		setToken(state, action) {
			state.token = action.payload;
		},
		setRoles(state, action) {
			state.roles = action.payload;
		},
		setEndSession(state, action) {
			state.endSession = action.payload;
		},
	},
});

export const { setToken, setRoles, setEndSession } = userSlice.actions;
export default userSlice.reducer;
