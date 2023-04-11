import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
	user: {
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		branch: null,
		year: null,
		event: null,
	}
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		setUser: (state, action) => {
			if (action.payload) {
				state.user = {
					uid: action.payload.uid,
					email: action.payload.email,
					displayName: action.payload.displayName,
					photoURL: action.payload.photoURL,
					branch: action.payload.branch,
					year: action.payload.year,
					event: action.payload.event,
					// Add other necessary properties here
				};
			} else {
				state.user = null;
			}
		},
	},
});

export const { setMode, setUser } = authSlice.actions;
const reduce = authSlice.reducer;
export default reduce;