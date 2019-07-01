import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import BookTableContent from'./GoOutContentScreens/BookTableContent';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const BookTableStack=createStackNavigator({
    DeliveryContent:{
        screen:BookTableContent
    },
    DeliveryHotelDetails:{
        screen:DeliveryHotelDetails
    },
},{
    headerMode:'none',
    navigationOptions:{
        headerVisible:false,
    }
});
const Container=createAppContainer(BookTableStack);

export default class BookTableScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

BookTableScreen.navigationOptions = {
    title: 'Book a Table',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
