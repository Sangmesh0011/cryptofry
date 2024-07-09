import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "X-BingApis-SDK": "true",
};

const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest= (url) => ({url,headers: newsHeaders})

export const newsApi=createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getNews: builder.query({
            query:({category,count})=>createRequest(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetNewsQuery} = newsApi;