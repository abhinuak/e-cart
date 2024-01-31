import { createSlice } from "@reduxjs/toolkit";

const whilistSlice = createSlice({
    name:"whislist",
    initialState:[],
    reducers:{
        addToWhislist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWhishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWhislist,removeFromWhishlist}=whilistSlice.actions
export default whilistSlice.reducer