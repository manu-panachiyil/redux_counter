import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    //reducer can only updates value of states in store
    //reduser key is predefined 
    //its an object which can hold more than one reduser
    //create Action file / create Reducer 
    reducer:{
        //reducer is coming from counterslice since we are export reducer as export default
        counter:counterSlice
    }
})