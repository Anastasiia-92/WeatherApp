import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import s from "./Search.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../reducers/store";
import {fetchCurrWeatherTC} from "../../reducers/forecast-weather-reducer";


export const Search = () => {
    const city = useSelector<AppRootStateType, string>((state) => (state.forecastWeather.city_name))
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState('')
    const [error, setError] = useState(false)

    const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setCityName(e.currentTarget.value)
    }

    const searchWeatherByName = () => {
        if (cityName.trim() !== "") {
            dispatch(fetchCurrWeatherTC(cityName));
            setCityName("");
        } else {
            setError(true);
        }
    }
    const setInputValueByKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== false) {
            setError(false);
        }
        if (e.key === 'Enter') {
            searchWeatherByName();
        }
    }
    return (
        <div className={s.wrap}>
            <span className={s.title}>Weather Forecast</span>
            <div className={s.search}>
                <label className={s.label}>
                    <input type="text"
                           placeholder={city}
                           className={s.input}
                           value={cityName}
                           onChange={setInputValue}
                           onKeyPress={setInputValueByKey}
                    />
                </label>
                <button
                    className={s.button}
                    onClick={searchWeatherByName}
                >Search</button>
            </div>
            {error && <div className={s.error}>Please, enter the city name</div>}
        </div>
    )
}


