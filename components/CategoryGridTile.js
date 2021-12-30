import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onTouch}
            style={{...styles.gridElement, backgroundColor: props.color }}
        >
            <View style={styles.textContainer}>
                <Text style={styles.gridElementText}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridElement: {
        padding:10,
        flex: 1,
        height: 160,
        paddingVertical: 10,
        borderRadius:10,
        margin: 5,
        elevation:6
    },
    textContainer : {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    gridElementText: {
        textAlign: "center",
        fontSize:20,
        fontWeight:'bold',
        fontFamily: 'OpenSans-Bold'
    }
})

export default CategoryGridTile