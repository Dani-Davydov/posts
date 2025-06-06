import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postsSlice.js'
import authReducer from './slices/authSlice.js'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer,
    },
})