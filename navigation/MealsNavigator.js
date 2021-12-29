import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

function NewNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMeals} />
      <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
}

export default NewNav