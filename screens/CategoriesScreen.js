import React from "react";
import {Button, StyleSheet, Text, View , FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";

const renderCategory = (itemData) => {
    return (<View style={styles.gridElement}><Text style={styles.gridElementText}>{itemData.item.title}</Text></View>)
}

const CategoriesScreen = ({navigation}) => {
    return (
        // <View style={styles.screen}>
        //     <Text>The categories screen</Text>
        //     <View style={styles.button}>
        //         <Button title='Go to meals' onPress={
        //             () => {
        //                 navigation.navigate('CategoryMeals')
        //             }
        //         }/>
        //     </View>
        // </View>
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
    gridElement : {
        flex:1,
                height:160,
        paddingVertical:10,
        borderColor:'black',
        borderWidth:1,
        borderStyle:'solid',
        margin: 5
    },
    gridElementText : {
        textAlign: "center"
    }
})

export default CategoriesScreen