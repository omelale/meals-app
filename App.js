import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import useFonts from './hooks/useFont';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from "./navigation/MealsNavigator";

const LoadFonts = async () => {
  await useFonts();
}
export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  if (!IsReady) {
    return (
        <AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={(err) => console.log(err)}
        />
    );
  }

  return <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    fontFamily: 'OpenSans-Regular'
  }
});
