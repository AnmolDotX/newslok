import { createSlice } from "@reduxjs/toolkit";


export const loadBookmarksFromLocalStorage = () => {
    try {
        const serializedBookmarks = localStorage.getItem("bookmarks");
        return serializedBookmarks ? JSON.parse(serializedBookmarks) : [];
    } catch (error) {
        console.error("error occured while loading bookmarks", error)
        return [];
    }
}

export const saveBookmarksToLocalStorage = (bookmarks) => {
    try {
        const serializedBookmarks = JSON.stringify(bookmarks);
        localStorage.setItem("bookmarks", serializedBookmarks);
    } catch (error) {
        console.error("error while saving bookmarks", error);
    }
}


const bookmarkSlice = createSlice({
    name : "bookmarks",
    initialState : loadBookmarksFromLocalStorage() ,
    reducers : {
        addBookmark : (state, action) => {
            const newState = [...state, action.payload];
            saveBookmarksToLocalStorage(newState);
            return newState;
        },
        removeBookmark : (state, action) => {
            const newState = state.filter((article) => article.url !== action.payload.url);
            saveBookmarksToLocalStorage(newState);
            return newState;
        }
    }
})

export const {addBookmark, removeBookmark} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
