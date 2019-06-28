import React from 'react';
import { ScrollView, StyleSheet,View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../../components/Header';
export default function DeliveryScreen() {
    return (
        <View>
            <Header/>
        </View>

    );
}

DeliveryScreen.navigationOptions = {
    title: 'Self Pickup',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
