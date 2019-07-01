import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import ForYouContent from './GoOutContentScreens/ForYouContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const ForYouStack=createStackNavigator({
    DeliveryContent:{
        screen:ForYouContent
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
const Container=createAppContainer(ForYouStack);

export default class ForYouScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

ForYouScreen.navigationOptions = {
    title: 'For You',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
