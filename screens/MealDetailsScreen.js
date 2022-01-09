import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useDispatch} from "react-redux";
import {addToFavourites} from "../store/actions/meals"

const ListItem = props => {
    return (<View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>);
};

const MealDetailsScreen = (props) => {
    const meal = props.route.params.meal;
    const dispatch = useDispatch();
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item iconName='ios-star' onPress={() => {dispatch(addToFavourites(meal.id))}}/>
                </HeaderButtons>
            ),
        });
    }, [props.navigation,meal]);

    // useEffect(() => {
    //     props.navigation.setOptions({title: meal.title});
    //     // this can be used in order to change the navigation option directly from the component props.navigation.setOptions({  headerRight: () => <Button title='top top' /> })
    // })

    return (<ScrollView>
        <Image source={{uri: meal.imageUrl}} style={styles.image}/>
        <View style={styles.details}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>)
}

const styles = StyleSheet.create({
    image: {
        width: '100%', height: 200
    }, details: {
        flexDirection: 'row', padding: 15, justifyContent: 'space-around'
    }, title: {
        fontFamily: 'OpenSans-Bold', fontSize: 22, textAlign: 'center'
    }, listItem: {
        marginVertical: 10, marginHorizontal: 20, borderColor: '#ccc', borderWidth: 1, padding: 10
    }
})

export default MealDetailsScreen