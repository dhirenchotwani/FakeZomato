import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import SelfPickupDetails from './SelfPickupDetails';

export default class SelfPickupContent extends  React.Component{
    render() {
        console.log("Inside SelfPickup Content");
        return (
            <View style={styles.container}>
                <Button title={'Phase 1'} onPress={()=> this.props.navigation.navigate('SelfPickupDetails')}/>
            </View>
        );
    }
}

// DeliveryContent.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

});
