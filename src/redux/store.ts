import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer:{
        user:userReducer
    },
    middleware:[thunk]
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store }