import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postsSlice.js'

export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
})