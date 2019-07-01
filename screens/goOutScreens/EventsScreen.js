import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import EventsContent from './GoOutContentScreens/EventsContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const EventsStack=createStackNavigator({
    DeliveryContent:{
        screen:EventsContent
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
const Container=createAppContainer(EventsStack);

export default class EventsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

EventsScreen.navigationOptions = {
    title: 'Events',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
