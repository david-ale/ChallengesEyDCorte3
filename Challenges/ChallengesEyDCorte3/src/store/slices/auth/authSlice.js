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
        login:(state,action) => {
            state.status = "authenticated";
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            
        },
        logout: () => {
            state.status = "checking";
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
        },
        checkingCredentials: () => {
            console.log('checking credentials');
        }
    }

})

export const { register,login, logout, checkingCredentials } = authSlice.actions; 
