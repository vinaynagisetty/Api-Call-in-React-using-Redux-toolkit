import  { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";

let intialData={
    user:[],
    status:"",
    error:false
}
export const fetching=createAsyncThunk("user/fetch", async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json();
        return data;
    } catch (error) {
        throw error

    }
})
let userSlice=createSlice({
    name:"user",
    initialState:intialData,
    reducers:{
        fetchUSer:(state,action)=>{

        }
    },
    extraReducers:(builder)=>{

        builder.addCase(fetching.pending,(state)=>{
            state.status="Loading"
        })
        builder.addCase(fetching.fulfilled,(state,action)=>{
            state.status="complete",
            state.user=action.payload,
            state.error="false"
        })
        builder.addCase(fetching.rejected,(state,action)=>{
            state.status="error",
            state.user=[],
            state.error=action.error.message
        })


    }


})
let store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
export default store;
