import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import colors from "../constants/colors";
import React from "react";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

function TabFavsNavigator() {
    return (
        <Tab.Group screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
            <Tab.Navigator>
                <Tab.Screen name="Categories" component={CategoriesScreen}/>
                <Tab.Screen name="Favourite" component={FavouritesScreen}/>
            </Tab.Navigator>
        </Tab.Group>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontWeight: 'bold',
    }
})

export default TabFavsNavigator;
