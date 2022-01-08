// this file will hold the reducers that include the logic of storing the state of
import {MEALS} from "../../data/dummy-data";
import {ADDTOFAVOURITES} from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTOFAVOURITES' : {
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0){
                //need to remove the meal from favourites
                const newFavs = [...state.favouriteMeals].splice(existingIndex,1);
                return {...state, favouriteMeals: newFavs}
            } else {
                return {...state,favouriteMeals: state.favouriteMeals.concat(state.meals.find(meal=>meal.id===action.mealId))}
            }
        }
        default :
            return state;
    }
}

export default mealsReducer;