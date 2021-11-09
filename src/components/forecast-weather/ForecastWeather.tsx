import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {DailyWeatherType} from "../../api/weather-api";
import s from "./ForecastWeather.module.scss";

export const ForecastWeather = () => {
    const forecast = useSelector<AppRootStateType, DailyWeatherType []>(state => state.forecastWeather.data)
    const weatherForFiveDays = forecast.filter((city, index) => index !== 0)

    const convertDateToDayName = (date: string) => {
        let dateToConvert = new Date(date);
        let day = dateToConvert.toLocaleString('en-us', {weekday: 'long'});
        return day
    }

    return (
        <div className={s.wrap}>
            {
                weatherForFiveDays.map((city, index) => {
                    return <div className={s.block}>
                        <span className={s.dayName}>{convertDateToDayName(city.valid_date)}</span>
                        <span className={s.description}>{city.weather.description}</span>
                        <span className={s.temp}>
                            {city.temp > 0 ? `+${Math.floor(city.temp)}`: Math.floor(city.temp)}
                        </span>
                    </div>
                })
            }

        </div>
    )
}