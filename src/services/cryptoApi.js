import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }), 
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }), 
        getCryptoHistory: builder.query({
            query: (coinId, timePeriod) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        })
    })
})

export const {
	useGetCryptosQuery, 
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   headers: {
//     'X-RapidAPI-Key': 'b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

