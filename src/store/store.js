import { configureStore } from "@reduxjs/toolkit";
import articleReducer from '../storeSlices/articleSlice'

const store = configureStore({
    reducer : {
        article : articleReducer
    }
})

export default store;