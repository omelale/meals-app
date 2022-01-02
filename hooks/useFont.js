import * as Font from "expo-font";

let useFonts;

export default useFonts = async () =>
    await Font.loadAsync({
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });