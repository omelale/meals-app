import React from "react";
import {StyleSheet,View,Text} from "react-native";

const CategoriesScreen = () => {
    return(<View style={styles.screen}><Text>The categories screen</Text></View>)
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        justifyContent:'center',
        alignItems : 'center'
    }
})

export default CategoriesScreen