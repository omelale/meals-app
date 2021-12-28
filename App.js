import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import useFonts from './hooks/useFont';
import AppLoading from 'expo-app-loading';



export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  }

  if (!IsReady) {
    return (
        <AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={() => {
            }}
        />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.testo}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testo : {
    fontFamily: 'OpenSans-Regular'
  }
});
