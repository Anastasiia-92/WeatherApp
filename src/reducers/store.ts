import {applyMiddleware, combineReducers, createStore} from "redux";
import {CurrWeatherActionsType, forecastWeatherReducer} from "./forecast-weather-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {CitiesListActionsType, citiesListReducer} from "./cities-list-reducer";



const rootReducers = combineReducers({
    app: appReducer,
    citiesList: citiesListReducer,
    forecastWeather:forecastWeatherReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducers>

export type AppRootActionsType =
    | AppActionsType
    | CurrWeatherActionsType
    | CitiesListActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>


