import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import SneakpeakContent from './GoOutContentScreens/SneakpeakContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const SneakpeakStack=createStackNavigator({
    DeliveryContent:{
        screen:SneakpeakContent
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
const Container=createAppContainer(SneakpeakStack);

export default class SneakpeakSscreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

SneakpeakSscreen.navigationOptions = {
    title: 'Sneakpeak',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
