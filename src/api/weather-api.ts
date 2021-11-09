import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0/'
})
const apiKey = '9978063b172344e09bb5be0ca04734a2'

// api
export const weatherAPI = {
    getForecastWeather(cityName: string) {
        return instance.get<ForecastWeatherType>(`forecast/daily/?city=${cityName}&key=${apiKey}&days=6`)
    }

}

export type DailyWeatherType =
    {
        moonrise_ts: number,
        wind_cdir: string,
        rh: number,
        pres: number,
        high_temp: number,
        sunset_ts: number,
        ozone: number,
        moon_phase: number,
        wind_gust_spd: number,
        snow_depth: number,
        clouds: number,
        ts: number,
        sunrise_ts: number,
        app_min_temp: number,
        wind_spd: number,
        pop: number,
        wind_cdir_full: string,
        slp: number,
        moon_phase_lunation: number,
        valid_date: string,
        app_max_temp: number,
        vis: number,
        dewpt: number,
        snow: number,
        uv: number,
        weather: {
            icon: string,
            code: number,
            description: string
        },
        wind_dir: number,
        max_dhi: null,
        clouds_hi: number,
        precip: number,
        low_temp: number,
        max_temp: number,
        moonset_ts: number,
        datetime: string,
        temp: number,
        min_temp: number,
        clouds_mid: number,
        clouds_low: number

    }
export type ForecastWeatherType = {
    data: DailyWeatherType [],
    city_name: string,
    lon: string,
    timezone: string,
    lat: string,
    country_code: string,
    state_code: string
}
