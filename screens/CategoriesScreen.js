import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
    const renderCategory = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onTouch={() => {
                props.navigation.navigate('CategoryMeals',{categoryId: itemData.item.id});
            }}/>
        )
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderCategory} numColumns={2} style={styles.screen}/>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:10
    }
})

export default CategoriesScreen