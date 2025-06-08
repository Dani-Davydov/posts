import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {postAPI} from "../../api/postsAPI.js";

const initialState = {
    posts: {
        list: null,
        loading: false,
    },
    filtersParametrs: {
        paginationInfo: {
            ActivePage: 0,
            pageCount: 0,
            perPage: 10
        },
        searchValue: "",
        sort: "",
    },
    filteredPosts: {
        filteredList: null,
    },
    postForView: {
        post: null,
        loading: false,
    },
    freshPosts: {
        posts: null,
        loading: false,
    },
    topPosts: {
        topPosts: null,
    },
}

export const getPostbyId = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postAPI.fetchById(postId)
    },
)

export const getFreshPostsFromBackend = createAsyncThunk(
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
            state.posts.list = state.posts.list.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload
                }

                return post
            })
        },
        addPost: (state, action) => {
            const newPost = {...action.payload}

            newPost.id = new Date().getTime()
            state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
        },
        getTopPosts: (state) => {
            state.topPosts.topPosts = state.posts.list.slice(0,3)
        },
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false,
            }
        },
        updateFiltersParametrs: (state, action) => {
            state.filtersParametrs = {
                ...state.filtersParametrs,
                ...action.payload
            };
        },
        filterList: (state) => {
            const paginatedList = (paginationInfo, list) => {
                const { perPage, ActivePage } = paginationInfo;

                state.filtersParametrs.paginationInfo.pageCount = Math.ceil(list.length / perPage);

                const firstIndex = ActivePage * perPage;
                const paginatedList = list.slice(firstIndex, firstIndex + perPage);

                return paginatedList;
            }

            const filterBySearchValue = (list, value) => {
                return list.filter((post) => {
                    return post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                })
            }

            const sortProducts = (list, sort) => {

                list.sort((a, b) => {

                    if (sort === "ASC") {
                        if (a.title > b.title) return 1;
                        if (a.title === b.title) return 0;
                        if (a.title < b.title) return -1;
                    }

                    if (a.title > b.title) return -1;
                    if (a.title === b.title) return 0;
                    if (a.title < b.title) return 1;
                })
            }

            const filterList = (searchValue, sort, paginationInfo) => {
                let filteredPosts = [...state.posts.list]

                if (searchValue) {
                    filteredPosts = filterBySearchValue(filteredPosts, searchValue)
                }

                if (sort) {
                    sortProducts(filteredPosts, sort)
                }

                return paginatedList(paginationInfo, filteredPosts);
            }

            const {searchValue, sort, paginationInfo} = state.filtersParametrs;

            state.filteredPosts.filteredList = filterList(searchValue, sort, paginationInfo );
        },
        deletePost: (state, action) => {
            state.posts.list = state.posts.list.filter((post) => post.id !== action.payload)

            state.postForView = {
                post: null,
                loading: true,
            }
        }
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
            state.posts = {
                list: action.payload,
                loading: false,
            }
        })

        builder.addCase(getFreshPostsFromBackend.pending, (state) => {
            state.freshPosts = {
                posts: null,
                loading: true,
            }
        })
        builder.addCase(getFreshPostsFromBackend.fulfilled, (state, action) => {
            state.freshPosts = {
                posts: action.payload,
                loading: false,
            }
        })

    },
})

// Action creators are generated for each case reducer function
export const { addPost, editPost, showPost, deletePost, filterList, updateFiltersParametrs, apdateDeletedId, getTopPosts } = postsSlice.actions

export default postsSlice.reducer