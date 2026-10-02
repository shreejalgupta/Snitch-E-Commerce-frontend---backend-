import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
        isAuth: false,
        isLoding: true
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isLoding = false;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
            state.isAuth = true
        },
        setIsAuth: (state, action) => {
            state.isAuth = false
        },
        isLoding: (state, action) => {
            state.isLoding = action.payload
        }
    }
})

export const { addUser, setToken, isLoding, setIsAuth } = authSlice.actions
export default authSlice.reducer