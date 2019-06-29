import React from 'react';
import { ScrollView, StyleSheet,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import SelfPickupContent from './orderScreens/SelfPickupContent';
import SelfPickupDetails from './orderScreens/SelfPickupDetails';
import {createStackNavigator , createAppContainer} from 'react-navigation';

const SelfPickupStack=createStackNavigator({
    SelfPickupContent:{
        screen:SelfPickupContent
    },
    SelfPickupDetails:{
        screen:SelfPickupDetails
    }
},{
    headerMode:'none',
    navigationOptions:{
        headerVisible:false,
    }
});
const Container=createAppContainer(SelfPickupStack);

export default class SelfPickup extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
            <Container/>
            </View>

        );
    }
}

SelfPickup.navigationOptions = {
    title: 'Self PickUp',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});
