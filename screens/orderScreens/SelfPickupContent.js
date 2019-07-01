import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Button, Image, ImageBackground, ScrollView,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View,
} from 'react-native';

import SelfPickupDetails from './SelfPickupDetails';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

export default class SelfPickupContent extends  React.Component{
    render() {
        console.log("Inside SelfPickup Content");
        return (
            <View style={styles.container}>
                <View style={styles.newFeatureContainer}>
                <Image source={require('../../assets/images/selfpickup.jpg')} style={styles.newFeature}/>
                </View>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <MaterialIcons name={'search'} color={'gray'} size={responsiveFontSize(3)}/>
                        <TextInput placeholder={'Search for restaurants,dishes...'}  placeholderTextColor={'#333'} style={styles.searchInput}/>
                    </View>
                    <TouchableOpacity style={styles.filter}>
                        <Ionicons name={'md-options'} color={'black'}
                                  size={responsiveFontSize(4)}/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={false}>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('Sel')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('SelfPickupDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                </ScrollView>
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
    infoContainer:{
        flexDirection:'row',

        paddingHorizontal:responsiveWidth(4),
        paddingVertical:responsiveHeight(2)
    },
    image:{
        width:responsiveWidth(25),
        height:responsiveWidth(35)
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
        height:responsiveHeight(6),
        width:responsiveWidth(75),
        backgroundColor:'#eee',
        borderRadius:responsiveHeight(1),
        paddingVertical:responsiveHeight(0.3),
        paddingHorizontal:responsiveWidth(2),

        alignItems: 'center',
        justifyContent:'center',
    },
    deals:{
        paddingHorizontal:responsiveWidth(2),
        paddingVertical: responsiveHeight(1.5),
    },
    dealImages:{
        width:responsiveWidth(40),
        height:responsiveWidth(40),


    },
    dealText:{
        color:'white',
        paddingHorizontal:responsiveWidth(2),
    },
    newFeature:{
        width:340,
        height:180,
        borderRadius:10,

    },
    newFeatureContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:responsiveWidth(2),
        paddingHorizontal:responsiveWidth(2),
        backgroundColor:'#eee',


    }

});

