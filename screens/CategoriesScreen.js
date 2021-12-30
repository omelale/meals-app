import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoriesScreen = (props) => {
    const renderCategory = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} onTouch={() => {
                props.navigation.navigate('CategoryMeals',
                    {
                        categoryId: itemData.item.id
                    });
            }}/>
        )
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderCategory} numColumns={2}/>
    )
}

CategoriesScreen.navigationOptions = {};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CategoriesScreen