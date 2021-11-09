import React, {useEffect} from 'react';
import s from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {Header} from "../header/Header";
import {QueriesList} from "../queries-weather-list/QueriesList";
import {RequestStatusType} from "../../reducers/app-reducer";
import {fetchCurrWeatherTC} from "../../reducers/forecast-weather-reducer";
import {Loading} from "../loading/Loading";
import {ForecastWeather} from "../forecast-weather/ForecastWeather";


function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()

    enum DefaultCity {
        cityName = 'Kiev'
    }

    useEffect(() => {
        dispatch(fetchCurrWeatherTC(DefaultCity.cityName))
    }, [])

    return (
        <div className={s.App}>
            <div className={s.wrap}>
                {status === 'loading'
                    ? <Loading/>
                    : <>
                        <Header/>
                        <QueriesList/>
                        <ForecastWeather />
                    </>}

            </div>
        </div>
    );
}

export default App;
