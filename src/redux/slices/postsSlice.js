import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {postAPI} from "../../api/postsAPI.js";

const initialState = {
    posts: {
        list: null,
        loading: false,
    },
    postForView: {
        post: null,
        loading: false,
    },
    freshPosts: {
        posts: null,
        loading: false,
    },
}

export const getPostbyId = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postAPI.fetchById(postId)
    },
)

export const getFreshPosts = createAsyncThunk(
    'posts/fetchFreshPosts',
    async (limit) => {
        return await postAPI.fetchFreshPosts(limit)
    }
)

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        return await postAPI.fetchPosts()
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            // edit
        },
        addPost: (state, action) => {
            // adding new post
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostbyId.pending, (state) => {
            state.postForView = {
                post: null,
                loading: true,
            }
        })
        builder.addCase(getPostbyId.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false,
            }
        })

        builder.addCase(getPosts.pending, (state) => {
            state.posts = {
                list: null,
                loading: true,
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.posts = {
                list: action.payload,
                loading: false,
            }
        })

        builder.addCase(getFreshPosts.pending, (state) => {
            state.freshPosts = {
                posts: null,
                loading: true,
            }
        })
        builder.addCase(getFreshPosts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.freshPosts = {
                posts: action.payload,
                loading: false,
            }
        })

    },
})

// Action creators are generated for each case reducer function
export const { addPost, editPost } = postsSlice.actions

export default postsSlice.reducer