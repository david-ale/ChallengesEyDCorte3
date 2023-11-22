import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
    },
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email;
        },
        logout: () => {
            
        },
        checkingCredentials: () => {
            console.log('checking credentials');
        }
    }

})

export const { register,login, logout, checkingCredentials } = authSlice.actions; 
