import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import colors from "../constants/colors";

const Stack = createStackNavigator();

function NewNav() {
    return (<Stack.Navigator>
        <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
                title: 'Categories', headerStyle: {
                    backgroundColor: colors.primaryColor,
                }, headerTintColor: '#fff', headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        />
        <Stack.Screen name="CategoryMeals" component={CategoryMeals} options={{
                headerStyle: {
                    backgroundColor: colors.primaryColor,
                }, headerTintColor: '#fff', headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}/>
    </Stack.Navigator>);
}

export default NewNav