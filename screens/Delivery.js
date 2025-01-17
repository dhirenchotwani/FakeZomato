import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import DeliveryContent from './orderScreens/DeliveryContent';
import DeliveryHotelDetails from './orderScreens/DeliveryHotelDetails';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const DeliveryStack=createStackNavigator({
   DeliveryContent:{
        screen:DeliveryContent
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
const Container=createAppContainer(DeliveryStack);

export default class DeliveryScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

DeliveryScreen.navigationOptions = {
    title: 'Delivery',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
