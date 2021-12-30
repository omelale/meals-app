import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {StyleSheet} from "react-native";
import colors from "../constants/colors";

const Stack = createStackNavigator();

function NewNav() {
    return (<Stack.Navigator>
            <Stack.Group screenOptions={{headerStyle: styles.headerStyle, headerTintColor: '#fff', headerTitleStyle: styles.headerTitleStyle}} >
                <Stack.Screen
                    name="CategoriesScreen"
                    component={CategoriesScreen}
                    options={{
                        title: 'Categories',
                    }}
                />
                <Stack.Screen
                    name="CategoryMeals"
                    component={CategoryMeals}
                />
                <Stack.Screen
                    name="MealDetailsScreen"
                    component={MealDetailsScreen}
                />
            </Stack.Group>
        </Stack.Navigator>);
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontWeight: 'bold',
    }
})

export default NewNav