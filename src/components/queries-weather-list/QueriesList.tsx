import React from "react";
import s from './QueriesList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {fetchCurrWeatherTC} from "../../reducers/forecast-weather-reducer";


export const QueriesList = () => {

    const citiesName = useSelector<AppRootStateType, string []>((state) => (state.citiesList))
    const dispatch = useDispatch()

    const weatherQueryByCity = (city: string) => {
        dispatch(fetchCurrWeatherTC(city))
    }

    return (
        <div className={s.wrap}>
            <span className={s.title}>Your last queries</span>
            <div className={s.citiesBlock}>
                {
                    citiesName && citiesName.map((city) => {
                        return <span
                            className={s.city}
                            onClick={() => {
                                weatherQueryByCity(city)
                            }}
                        >{city}</span>
                    })
                }
            </div>
        </div>
    )
}