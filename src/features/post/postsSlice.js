import { createSlice } from "@reduxjs/toolkit";

// intailizing the state == hard coding it 
const initialState=[
    {
        id:"1",
        title:'Redux Toolkit',
        content:'Redux is all about managing the state globally in the app'
    },
    {
        id:"2",
        title:'React',
        content:'React is an amazing library'
    }
]

//creating the post slice
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost(state,action){
            state.push(action.payload)
        }
    }
})
// exporting all posts slice
export const allPosts = state=>state.posts;
// exporting the posts actions 
export const {addPost} = postsSlice.actions

export default postsSlice.reducer;





