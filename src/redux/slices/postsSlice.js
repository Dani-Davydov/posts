import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [
        {
            id: 5,
            title: 'post 5',
            image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
        },
        {
            id: 4,
            title: 'post 4',
            image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
        },
        {
            id: 3,
            title: 'post 3',
            image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
        },
        {
            id: 2,
            title: 'post 2',
            image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
        },
        {
            id: 1,
            title: 'post 1',
            image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
        },
    ],
    postForView: null,
    freshPosts: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.list = action.payload
        },
        editPost: (state, action) => {
            // edit
        },
        getPosts: (state, action) => {
            state.postForView = state.list.find(post => post.id === action.payload)
        },
        getFreshPosts: (state, action) => {
            state.freshPosts = state.list.slice(0, 3)
        },
        addPost: (state, action) => {
            // adding new post
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPosts, addPost, editPost, getPosts, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer