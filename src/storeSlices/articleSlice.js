import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../conf/conf";

const initialState = {
    // getAllArticles() states
    loading : true,
    allArticles : [],
    allArticlesRejected : {},

    // getCategoryArticles() states
    categoryLoading : true,
    scienceArticles : [],
    businessArticles : [],
    technologyArticles : [],
    healthArticles : [],
    sportsArticles : [],
    entertainmentArticles : [],
    categoryArticlseRejected : {},

    // getEverything() states
    everyPointLoading : true,
    everyArticles : [],
    everyArticleRejected : {}
    
}


// get all the article from top-headlines endpoint in langugage=en

export const getAllArticles = createAsyncThunk('getAllArticles', async (lang = 'en', page=0) => {
    const {data} = await axios.get(`${conf.newsBaseUrl}/${conf.newsEndpoint.topHeadlines}?language=${lang}&page=${page}&apiKey=${conf.newsApiKey}`)
    return data;
})


// get the articles on the basis of whatever category is clicked

export const getCategoryArticles = createAsyncThunk('getCategoryArticles', async (category = 'science', country = null, lang='en', query=null) => {
    const {data} = await axios.get(`${conf.newsBaseUrl}/${conf.newsEndpoint.topHeadlines}?q=${query}&category=${category}&country=${country}&language=${lang}&apiKey=${conf.newsApiKey}`)
    return {data  : data , category : category};
})

export const getEveryArticle = createAsyncThunk('getEveryArticle', async (query, lang='en') => {
    const {data} = axios.get(`${conf.newsBaseUrl}/${conf.newsEndpoint.everything}/?q=${query}&language=${lang}&apiKey=${conf.newsApiKey}`)
    return data;
})

const articleSlice = createSlice({
    name : "article",
    initialState,
    extraReducers : (builder) => {
        // getAllArticles()
        builder.addCase(getAllArticles.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllArticles.fulfilled, (state, action) => {
            state.allArticles = action.payload;
            state.loading = false
        })
        builder.addCase(getAllArticles.rejected, (state, action)=> {
            state.allArticles = [];
            state.allArticlesRejected = action.payload
            state.loading = false;
        })

        // getCategoryArticle
        builder.addCase(getCategoryArticles.pending, (state) => {
            state.categoryLoading = true;
        })
        builder.addCase(getCategoryArticles.fulfilled, (state, action) => {
            if(action.payload.category === 'science') {
                state.scienceArticles = action.payload.data;
            }

            if(action.payload.category === 'business') {
                state.businessArticles = action.payload.data
            }

            if(action.payload.category === 'technology') {
                state.technologyArticles = action.payload.data
            }

            if(action.payload.category === 'health') {
                state.healthArticles = action.payload.data
            }

            if(action.payload.category === 'sports') {
                state.sportsArticles = action.payload.data
            }

            if(action.payload.category === 'entertainment') {
                state.entertainmentArticles = action.payload.data
            }

            state.categoryLoading = false;
        })
        builder.addCase(getCategoryArticles.rejected, (state, action) => {
            state.businessArticles = []
            state.scienceArticles = []
            state.technologyArticles = []
            state.healthArticles = []
            state.sportsArticles = []
            state.entertainmentArticles = []
            state.categoryArticlseRejected = action.payload
            state.categoryLoading = false;
        })

        // getEveryArtilce()
        builder.addCase(getEveryArticle.pending, (state) => {
            state.everyPointLoading = true;
        })
        builder.addCase(getEveryArticle.fulfilled, (state, action) => {
            state.everyArticles = action.payload
            state.everyPointLoading = false;
        })
        builder.addCase(getEveryArticle.rejected, (state, action) => {
            state.everyArticles = [];
            state.everyArticleRejected = action.payload;
            state.everyPointLoading = false;
        })
    }
})

export const {} = articleSlice.actions;
export default articleSlice.reducer;