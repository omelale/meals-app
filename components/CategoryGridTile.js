import React from "react";
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

const CategoryGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (<View
        style={{...styles.gridElement, backgroundColor: props.color}}>
        <TouchableComponent
            onPress={props.onTouch}>
            <View style={styles.textContainer}>
                <Text style={styles.gridElementText}>
                    {props.title}
                </Text>
            </View>
        </TouchableComponent>
    </View>)
}

const styles = StyleSheet.create({
    gridElement: {
        flex: 1, height: 160, borderRadius: 10, margin: 5, elevation: 6
    }, textContainer: {
        flex: 1, justifyContent: 'center', alignContent: 'center',
    }, gridElementText: {
        textAlign: "center", fontSize: 20, fontWeight: 'bold', fontFamily: 'OpenSans-Bold'
    }
})

export default CategoryGridTile