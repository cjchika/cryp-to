import { createApi, fetchBaseQuery } from './@redux/toolkit/query';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl })
})


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   headers: {
//     'X-RapidAPI-Key': 'b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

