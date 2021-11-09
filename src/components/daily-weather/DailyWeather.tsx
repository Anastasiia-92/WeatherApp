import React from "react";
import s from './DailyWeather.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";


export const DailyWeather = () => {

    const city = useSelector<AppRootStateType, string>((state) => (state.forecastWeather.city_name))
    const temp = useSelector<AppRootStateType, number>((state) => (state.forecastWeather.data[0].temp))
    const description = useSelector<AppRootStateType, string>((state) => (state.forecastWeather.data[0].weather.description))

    return (
        <div className={s.wrap}>
            <span className={s.temp}>
                {`${city} (Today): ${temp > 0 ? `+${Math.floor(temp)}` : Math.floor(temp)}`}
            </span>
            <span className={s.description}>{description}</span>
        </div>
    )
}