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



export default function DeliveryContent() {
    console.log("inside Delivery Content");
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
        </View>
    );
}

DeliveryContent.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        paddingTop:200,
        fontSize:82,

    },

});
