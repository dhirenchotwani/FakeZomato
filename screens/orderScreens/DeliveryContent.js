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
    TextInput
} from 'react-native';

import DeliveryHotelDetails from './DeliveryHotelDetails';
import {Ionicons} from "@expo/vector-icons";
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import Colors from '../../constants/Colors';
export default class DeliveryContent extends  React.Component{
    render() {
        console.log("Inside Delivery Content");
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput placeholder={'Search for restauranrs,dishes...'} style={styles.searchInput}/>
                    <TouchableOpacity style={styles.filter}>
                        <Ionicons name={'md-options'} color={'black'}
                                       size={responsiveFontSize(3)}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity title={'Phase 1'}
                                  onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                  style={styles.infoContainer}>

                    <Image style={styles.image}
                           source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                    <View styles={styles.hotelInfoContainer}>
                        <Text>Hotel Name</Text>
                        <Text>Hotel Address</Text>
                        <Text>Average Cost</Text>

                    </View>

                </TouchableOpacity>
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
    infoContainer:{
        flexDirection:'row',
        paddingHorizontal:responsiveWidth(4),
        paddingVertical:responsiveHeight(4)
    },
    image:{
        width:responsiveWidth(25),
        height:responsiveWidth(35)
    },
    search:{
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.5),
        flexDirection: 'row',
        alignItems:'center',
    },
    filter:{
            backgroundColor:Colors.iconColor,

        paddingVertical:responsiveWidth(1.2),
        paddingHorizontal:responsiveHeight(1.2),
        borderRadius:responsiveHeight(1.2)
    },
    searchInput:{
        height:responsiveHeight(4.5),
        width:"87%",
        backgroundColor:'#eee',
        borderRadius:responsiveHeight(1),
        paddingVertical:responsiveHeight(0.3),
        paddingHorizontal:responsiveWidth(2),
        fontSize:responsiveFontSize(2),
        marginRight:responsiveWidth(2.5),
    }

});
