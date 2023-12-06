import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Iwather, Iwether } from "../types/type";

  const APIMain = 'http://api.openweathermap.org'

  interface cord {
    lon: number,
    lat: number
  }

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: APIMain
  }),
  endpoints: (builder)  => ({
    watherApiAdd: builder.query<Iwether[],string>({
      query: (search: string) => ({
        url: 'geo/1.0/direct',
        params: {
          q:search,
          limit: 1,
          appid: 'a9541faa25c9440850ef526513124f32'
        }
      })
    }),
    WatherPods: builder.query<Iwather,object>({
      query: ({lat,lon}:cord) => ({
        url: 'data/2.5/weather/',
        params: {
          units: 'metric',
          lat: lat,
          lon: lon,
          appid: 'a9541faa25c9440850ef526513124f32'
        }
      })
    })
  })
})

export const { useLazyWatherApiAddQuery, useLazyWatherPodsQuery} = api