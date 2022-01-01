import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {StyleSheet} from "react-native";
import colors from "../constants/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FavouritesScreen from "../screens/FavouritesScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Categories" component={NewNav} options={{headerShown: false}}/>
            <Tab.Screen name="Favourite" component={FavouritesScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}


function NewNav() {
    return (<Stack.Navigator>
        <Stack.Group screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
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
                options={{
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item iconName='ios-star' onPress={() => {
                                console.log()
                            }}/>
                        </HeaderButtons>
                    ),
                }}
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

export {NewNav, Home}