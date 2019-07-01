import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import CuisinesContent from './GoOutContentScreens/CuisinesContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const CuisinesStack=createStackNavigator({
    DeliveryContent:{
        screen:CuisinesContent
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
const Container=createAppContainer(CuisinesStack);

export default class CuisinesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

CuisinesScreen.navigationOptions = {
    title: 'Cuisines',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
