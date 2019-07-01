import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import AllGoldContent from './GoldContentScreens/AllGoldContent';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const AllGoldScreen=createStackNavigator({
    AllGoldContent:{
        screen:AllGoldContent
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
const Container=createAppContainer(AllGoldScreen);

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
    title: 'All',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
