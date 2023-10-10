import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type userType = {
	password: string
	email: string | null
	uid?: string
	username?: string | null
}

export interface IUser {
	user: null | userType
	isLoading: boolean
}
const initialState: IUser = {
	user: null,
	isLoading: false,
}

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload
		},
		logoutUser: (state) => {
			state.user = null
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const { loginUser, logoutUser, setLoading } = authSlice.actions
