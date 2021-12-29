import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";

const CategoryMeals = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The category meals screen</Text>
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