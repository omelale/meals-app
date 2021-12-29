import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";

const MealDetailsScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>The Meal details screen</Text>
            <View style={styles.button}>
                <Button title='Go back to categories' onPress={
                    () => {
                        props.navigation.popToTop()
                    }
                }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        justifyContent:'center',
        alignItems : 'center'
    },
    button: {
        padding: 20,
        marginTop: 10,
    }
})

export default MealDetailsScreen