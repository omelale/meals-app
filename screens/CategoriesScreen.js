import React from "react";
import {Button, StyleSheet, Text, View , FlatList} from "react-native";

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
        <FlatList numColumns={2}/>
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
    }
})

export default CategoriesScreen