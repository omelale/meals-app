export const ADDTOFAVOURITES = 'ADDTOFAVOURITES';

export const addToFavourites = (id) => {
    return {
        type: ADDTOFAVOURITES,
        mealId : id
    }
}
