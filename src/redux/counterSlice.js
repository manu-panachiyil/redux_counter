import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducer key as object

    reducers:{
        //logics to update state

        increment : (state, action) => {
            state.value += action.payload
        },

        decrement:(state, action) => {
            state.value -= action.payload
        },

        reset:(state) => {
            state.value = 0
        }
    }
})

//action is required by component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer