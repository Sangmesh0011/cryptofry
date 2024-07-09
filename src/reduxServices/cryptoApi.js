import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest= (url) => ({url,headers: cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCrptoDetails: builder.query({
            query:(cId)=> createRequest(`/coin/${cId}`)
        }),
        getCryptoHistory: builder.query({
            query:({cId,timePeriod})=> createRequest(`/coin/${cId}/history?timePeriod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCrptoDetailsQuery,
    useGetCryptoHistoryQuery
}=cryptoApi;