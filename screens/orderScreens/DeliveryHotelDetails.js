import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';



export default class DeliveryHotelDetails extends  React.Component{
    render() {
        console.log("Inside Delivery hotel details Content");
        return (
            <View style={styles.container}>
               <Text>DD</Text>
            </View>
        );
    }
}

// DeliveryHotelDetails.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

});
