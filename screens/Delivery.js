import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import DeliveryContent from './order screens/DeliveryContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const DeliveryStack=createStackNavigator({
   DeliveryContent:{
        screen:DeliveryContent
   },
});
const Container=createAppContainer(DeliveryStack);

export default function DeliveryScreen() {
    return (
        <View>
        <Header/>
        <Container/>
        </View>

    );
}

DeliveryScreen.navigationOptions = {
    title: 'Delivery',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
