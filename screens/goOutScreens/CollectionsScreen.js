import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
import DeliveryHotelDetails from '../orderScreens/DeliveryHotelDetails';
import CollectionsContent from './GoOutContentScreens/CollectionsContent';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const CollectionsStack=createStackNavigator({
    DeliveryContent:{
        screen:CollectionsContent
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
const Container=createAppContainer(CollectionsStack);

export default class CollectionsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Container/>

            </View>

        );
    }
}

CollectionsScreen.navigationOptions = {
    title: 'Collections',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
