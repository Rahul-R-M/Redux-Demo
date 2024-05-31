import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Module/CRUD/store/UserSlice";

export const store = configureStore({
    reducer:{
        User : UserSlice,
    }
})