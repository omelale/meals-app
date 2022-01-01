// this file will hold the reducers that include the logic of storing the state of
import {MEALS} from "../../data/dummy-data";

const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState,action) => {
    return state;
}

export default mealsReducer;