import React from "react";
import {StyleSheet,View,Text} from "react-native";

const MealDetailsScreen = () => {
    return(<View style={styles.screen}><Text>The Meal details screen</Text></View>)
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        justifyContent:'center',
        alignItems : 'center'
    }
})

export default MealDetailsScreen