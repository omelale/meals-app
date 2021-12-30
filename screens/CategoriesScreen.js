import React from "react";
import {FlatList, StyleSheet, Text, View,TouchableOpacity} from "react-native";
import {CATEGORIES} from "../data/dummy-data";


const CategoriesScreen = (props) => {
    const renderCategory = (itemData) => {
        return (
            <TouchableOpacity onPress={()=>{props.navigation.navigate('CategoryMeals')}} style={styles.gridElement}><View ><Text
                style={styles.gridElementText}>{itemData.item.title}</Text></View></TouchableOpacity>
        )
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderCategory} numColumns={2}/>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 20,
        marginTop: 10,
    },
    gridElement: {
        flex: 1,
        height: 160,
        paddingVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 5
    },
    gridElementText: {
        textAlign: "center"
    }
})

export default CategoriesScreen