import React from 'react';
import {ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";


export default class SearchScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <MaterialIcons name={'search'} color={'gray'} size={responsiveFontSize(3)}/>
                        <TextInput placeholder={'Search for restaurants,dishes...'}  placeholderTextColor={'#333'} style={styles.searchInput}/>
                    </View>

                </View>

            </View>

        );
    }
}

SearchScreen.navigationOptions = {
    title: 'SearchScreen',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search:{
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(2),
        paddingVertical: responsiveHeight(1.5),
        flexDirection: 'row',
        alignItems:'center',
    },
    filter:{
        backgroundColor:'#eee',

        paddingVertical:responsiveWidth(1.2),
        paddingHorizontal:responsiveHeight(1.2),
        borderRadius:responsiveHeight(1.2)
    },
    searchInput:{
        flex:1,


        fontSize:responsiveFontSize(2),

    },
    searchBar:{
        flexDirection:'row',
        height:responsiveHeight(4.5),
        width:responsiveWidth(95),
        backgroundColor:'#eee',
        borderRadius:responsiveHeight(1),
        paddingVertical:responsiveHeight(0.3),
        paddingHorizontal:responsiveWidth(2),

        alignItems: 'center',
        justifyContent:'center',
    }
});
