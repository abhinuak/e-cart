import { configureStore } from "@reduxjs/toolkit";
import whislistSlice from "./slices/whislistSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        whishlistReducer:whislistSlice,
        cartReducer:cartSlice
    }

})
export default store