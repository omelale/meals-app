import React, {useEffect} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {CATEGORIES} from "../data/dummy-data";


const CategoryMeals = (props) => {
    const catId = props.route.params.categoryId;
    if(catId == undefined){
        return  (<Text>Go back cuz route not ok</Text>)
    }
    const category = CATEGORIES.find(cat => cat.id === catId);
    useEffect(()=>{
            props.navigation.setOptions({ title: category.title })
    })
    return (
        <View style={styles.screen}>
            <Text>Here you will find all the meals of the {category.title} category</Text>
            <View style={styles.button}>
                <Button title='Check this meal out' onPress={
                    () => {
                        props.navigation.navigate('MealDetailsScreen')
                    }
                }/>
            </View>
        </View>)
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
    }
})

export default CategoryMeals