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
import {Ionicons} from "@expo/vector-icons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackFavs = createStackNavigator();

function Home() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Categories') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Favourites') {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                    }
                    size = 27;
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: colors.primaryColor,
                tabBarInactiveTintColor: colors.primaryColor,
            })}
        >
            <Tab.Screen name="Categories" component={NewNav} options={{headerShown: false}}/>
            <Tab.Screen name="Favourites" component={FavsStack} options={{headerShown: false}}/>
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
                options={({route})=>({title:route.params.name})}
            />
            <Stack.Screen
                name="MealDetailsScreen"
                component={MealDetailsScreen}
                options={({route})=>({
                    title:route.params.meal.title,
                    headerRight: () =>
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item iconName='ios-star' onPress={()=>{}}/>
                        </HeaderButtons>
                    ,
                })}
            />
        </Stack.Group>
    </Stack.Navigator>);
}

function FavsStack() {
    return (
        <StackFavs.Navigator>
            <StackFavs.Group
                screenOptions={{
                    headerStyle: styles.headerStyle,
                    headerTintColor: '#fff',
                    headerTitleStyle: styles.headerTitleStyle
                }}>
                <StackFavs.Screen
                    name="Favourites"
                    component={FavouritesScreen}
                    options={{
                        title: 'Favourite meals',
                    }}
                />
                <StackFavs.Screen
                    name="MealDetailsScreen"
                    component={MealDetailsScreen}
                    options={({route})=>({
                    title:route.params.meal.title,
                    headerRight: () =>
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item iconName='ios-star' onPress={()=>{}}/>
                        </HeaderButtons>
                    ,
                })}
                />
            </StackFavs.Group>
        </StackFavs.Navigator>
    );
}


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontWeight: 'bold',
    }
})

export {NewNav, Home, FavsStack}