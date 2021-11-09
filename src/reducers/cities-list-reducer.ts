
const initialState: CitiesListWeatherStateType = []


export const citiesListReducer = (state: CitiesListWeatherStateType = initialState, action: CitiesListActionsType): CitiesListWeatherStateType => {
    switch (action.type) {

        case 'CITIESLIST/SET-CITY-TO-LIST': {
            if (state.length < 10) {
                return [action.cityName, ...state]
            } else {
                let newSate = state.filter((city, index) => index < 9 ? city : '')
                return [action.cityName, ...newSate]
            }
        }
        default:
            return [...state]
    }
}

// actions
export const setCityToListAC = (cityName: string) => ({
    type: 'CITIESLIST/SET-CITY-TO-LIST',
    cityName
} as const)


// types
export type CitiesListWeatherStateType = string []
export type CitiesListActionType = ReturnType<typeof setCityToListAC>
export type  CitiesListActionsType = CitiesListActionType


