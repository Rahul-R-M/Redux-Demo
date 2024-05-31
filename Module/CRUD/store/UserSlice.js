import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    UserListData:[],
    loader:false
}
export const UserList = createAsyncThunk(
    'UserList',
    async()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return res.data
        } catch (error) {
            
        }
    }
)

export const UserSlice = createSlice({
    name:'UserSlice',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(UserList.pending,(state)=>{
            state.loader = true
        })
        .addCase(UserList.fulfilled,(state,action)=>{
            state.UserListData = action.payload
            state.loader = false
        })
        .addCase(UserList.rejected,(state)=>{
            state.loader = false
        })
    }
}) 
export default UserSlice.reducer