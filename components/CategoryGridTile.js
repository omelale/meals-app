import React from "react";
import {View, StyleSheet,TouchableOpacity, Text} from "react-native";

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
                onPress={ props.onTouch }
                style={styles.gridElement}
        >
                <View>
                    <Text style={styles.gridElementText}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default CategoryGridTile