import {setAppErrorAC, setAppStatusAC} from "./app-reducer";
import {ForecastWeatherType, weatherAPI} from "../api/weather-api";
import {AppThunk} from "./store";
import {setCityToListAC} from "./cities-list-reducer";


const initialState: ForecastWeatherType = {
    data: [
        {
            moonrise_ts: 0,
            wind_cdir: '',
            rh: 0,
            pres: 0,
            high_temp: 0,
            sunset_ts: 0,
            ozone: 0,
            moon_phase: 0,
            wind_gust_spd: 0,
            snow_depth: 0,
            clouds: 0,
            ts: 0,
            sunrise_ts: 0,
            app_min_temp: 0,
            wind_spd: 0,
            pop: 0,
            wind_cdir_full: '',
            slp: 0,
            moon_phase_lunation: 0,
            valid_date: '',
            app_max_temp: 0,
            vis: 0,
            dewpt: 0,
            snow: 0,
            uv: 0,
            weather: {
                icon: '',
                code: 0,
                description: ''
            },
            wind_dir: 0,
            max_dhi: null,
            clouds_hi: 0,
            precip: 0,
            low_temp: 0,
            max_temp: 0,
            moonset_ts: 0,
            datetime: '',
            temp: 0,
            min_temp: 0,
            clouds_mid: 0,
            clouds_low: 0
        },

    ],
    city_name: '',
    lon: '',
    timezone: '',
    lat: '',
    country_code: '',
    state_code: ''
}

export const forecastWeatherReducer = (state: ForecastWeatherType = initialState, action: CurrWeatherActionsType): ForecastWeatherType => {
    switch (action.type) {
        case 'FORECASTWEATHER/SET-FORECAST-WEATHER': {
            return action.weatherData
        }
        default:
            return {...state}
    }
}

// actions
export const setForecastWeatherAC = (weatherData: ForecastWeatherType) => ({
    type: 'FORECASTWEATHER/SET-FORECAST-WEATHER', weatherData
} as const)

// thunks
export const fetchCurrWeatherTC = (cityName: string): AppThunk =>
    async (dispatch) => {

        dispatch(setAppStatusAC('loading'))
        try {
            const res = await weatherAPI.getForecastWeather(cityName)
            dispatch(setForecastWeatherAC(res.data))
            dispatch(setCityToListAC(res.data.city_name))
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {
            dispatch(setAppErrorAC('some error'))
        }
    }

export type setForecastWeatherActionType = ReturnType<typeof setForecastWeatherAC>
export type CurrWeatherActionsType = setForecastWeatherActionType
