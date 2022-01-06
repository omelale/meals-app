import React from "react";
import {FlatList, StyleSheet} from "react-native";
import MealGridTile from "../components/MealGridTile";
import {useSelector} from "react-redux";


const FavouritesScreen = (props) => {
    const meals = useSelector((state)=>state.meals.favouriteMeals);
    const renderMeal = (itemData) => {
        return (
            <MealGridTile
                title={itemData.item.title}
                affordability={itemData.item.affordability}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetailsScreen', {meal: itemData.item});
                }}/>
        )
    }
    return (
        <FlatList data={meals} renderItem={renderMeal} numColumns={2} style={styles.screen}/>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    }
})

export default FavouritesScreen