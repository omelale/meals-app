import {useState} from "react";
import {StyleSheet} from 'react-native';
import useFonts from './hooks/useFont';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from "./navigation/MealsNavigator";
import {enableScreens} from "react-native-screens";
import {combineReducers, createStore} from "redux";
import mealsReducer from "./store/reducers/meals";
import {Provider} from "react-redux";

enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer
});

const store = createStore(rootReducer);

const LoadFonts = async () => {
    await useFonts();
}
export default function App() {
    const [IsReady, SetIsReady] = useState(false);

    if (!IsReady) {
        return (<AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={(err) => console.log(err)}
        />);
    }

    return (<Provider store={store}><NavigationContainer>
        <Home/>
    </NavigationContainer></Provider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    }, test: {
        fontFamily: 'OpenSans-Regular'
    }
});
