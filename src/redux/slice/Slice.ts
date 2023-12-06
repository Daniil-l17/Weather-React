import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iwather } from "../../types/type";

  interface ItState {
    weather: {
      city: string,
      degrees: number,
      degreesDetail: number,
      pressure: number,
      humidity: number,
      wind: number
    }
  }

  const initialState:ItState = {
    weather: {
      city: '',
      degrees: 0,
      degreesDetail: 0,
      pressure: 0,
      humidity: 0,
      wind: 0
    }
  }

export const weatherSlice = createSlice({
  name: 'weathers',
  initialState,
  reducers: {
    weatherInfo: (state,action:PayloadAction<string>) => {
      if(action.payload){
        state.weather.city = action.payload
      }
    },
    addwatherInfo: (state,action:PayloadAction<Iwather | undefined >) => {
      if(action.payload){
        state.weather.degrees = action.payload.main.temp
        state.weather.degreesDetail = action.payload.main.feels_like
        state.weather.pressure = action.payload.main.pressure
        state.weather.humidity = action.payload.main.humidity
        state.weather.wind = action.payload.wind.speed
      }
    }
  }
})

export const {reducer,actions} = weatherSlice