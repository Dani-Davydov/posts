import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        editPost: (state, action) => {
            // edit
        },
        getPosts: (state, action) => {
            // return by id
        },
        addPost: (state, action) => {
            // adding new post
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPosts, addPost, editPost, getPosts } = postsSlice.actions

export default postsSlice.reducer