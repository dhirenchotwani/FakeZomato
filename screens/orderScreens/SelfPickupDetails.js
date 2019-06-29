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



export default class SelfPickupDetails extends  React.Component{
    render() {
        console.log("Inside Self pickup details Content");
        return (
            <View style={styles.container}>
                <Text>SD</Text>
            </View>
        );
    }
}

// SelfPickupDetails.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

});
