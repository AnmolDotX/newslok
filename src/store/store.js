import { configureStore } from "@reduxjs/toolkit";
import articleReducer from '../storeSlices/articleSlice'
import bookmarksReducer,{loadBookmarksFromLocalStorage, saveBookmarksToLocalStorage} from "../storeSlices/bookmarksSlice";

const preloadedState = {
    bookmarks : loadBookmarksFromLocalStorage()
}

const store = configureStore({
    reducer : {
        article : articleReducer,
        bookmarks : bookmarksReducer
    },
    preloadedState
})

store.subscribe(()=>{
    const state = store.getState();
    saveBookmarksToLocalStorage(state.bookmarks)
})

export default store;