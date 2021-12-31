import React from "react";
import {View,Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity,Platform} from "react-native";

const MealGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (<View style={styles.gridElement}><TouchableComponent onPress={props.onSelectMeal}><Text>{props.title}</Text></TouchableComponent></View>)
}

const styles = StyleSheet.create({
    gridElement: {
        flex: 1, height: 160, borderRadius: 10, margin: 5, elevation: 6, overflow:"hidden"
    }
})

export default MealGridTile