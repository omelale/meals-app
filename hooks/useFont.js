import * as Font from "expo-font";

let useFonts;

export default useFonts = async () =>
  await Font.loadAsync({
    'fnt': require('../assets/fonts/Roboto-Black.ttf')
  });