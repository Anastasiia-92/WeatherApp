import React from "react";
import s from './Header.module.scss'
import {Search} from "../search/Search";
import {DailyWeather} from "../daily-weather/DailyWeather";

export const Header = () => {

    return (
        <div className={s.wrap}>
            <Search/>
            <DailyWeather/>
        </div>
    )
}