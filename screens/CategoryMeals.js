import React, {useEffect} from "react";
import { StyleSheet, FlatList} from "react-native";
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
                onSelectMeal={() => {
                props.navigation.navigate('MealDetailsScreen',{categoryId: itemData.item.id});
            }}/>
        )
    }

    useEffect(() => {
        props.navigation.setOptions({title: category.title})
    })
    return (
        <FlatList data={meals} renderItem={renderMeal} numColumns={1} style={styles.screen}/>
        // <View style={styles.screen}>
        //     <Text>Here you will find all the meals of the {category.title} category</Text>
        //     <View style={styles.button}>
        //         <Button title='Check this meal out' onPress={() => {
        //             props.navigation.navigate('MealDetailsScreen')
        //         }}/>
        //     </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:10
    }
})

export default CategoryMeals