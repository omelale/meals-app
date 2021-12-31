import React from "react";
import {
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from "react-native";

const MealGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    console.log(props);
    return (
        <View style={styles.gridElement}>
            <TouchableComponent onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground
                            source={{uri: props.imageUrl}}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        gridElement: {
            flex: 1,
            height: 200,
            width: '100%',
            borderRadius: 10,
            margin: 5,
            elevation: 6,
            overflow: "hidden"
        },
        bgImage: {
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end'
        },
        mealRow: {
            flexDirection: 'row'
        },
        mealHeader: {
            height: '85%'
        },
        mealDetail: {
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '15%'
        },
        titleContainer: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingVertical: 5,
            paddingHorizontal: 12
        },
        title: {
            fontFamily: 'OpenSans-Bold',
            fontSize: 20,
            color: 'white',
            textAlign: 'center'
        }
    }
)

export default MealGridTile