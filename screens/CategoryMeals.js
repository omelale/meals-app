import React, {useEffect} from "react";
import {FlatList, StyleSheet} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealGridTile from "../components/MealGridTile";


const CategoryMeals = (props) => {
    const catId = props.route.params.categoryId;
    const category = CATEGORIES.find(cat => cat.id === catId);
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
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

    useEffect(() => {
        props.navigation.setOptions({title: category.title})
    })
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

export default CategoryMeals