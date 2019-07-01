import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';

import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";

export default class FoodGoldContent extends  React.Component{
    render() {
        console.log("Inside Food Gold Content");
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.dealsContainer}>
                    <View style={styles.deals}>
                        <ImageBackground source={{uri:"https://i2.wp.com/www.lootpur.in/wp-content/uploads/2019/04/images-78-323493120..jpg?resize=300%2C190&ssl=1"}}  style={styles.dealImages}>
                            <Text style={styles.dealText}>Zomato deal text</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.deals}>
                        <ImageBackground source={{uri:"https://i2.wp.com/www.lootpur.in/wp-content/uploads/2019/04/images-78-323493120..jpg?resize=300%2C190&ssl=1"}}  style={styles.dealImages}>
                            <Text style={styles.dealText}>Zomato deal text</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.deals}>
                        <ImageBackground source={{uri:"https://i2.wp.com/www.lootpur.in/wp-content/uploads/2019/04/images-78-323493120..jpg?resize=300%2C190&ssl=1"}}  style={styles.dealImages}>
                            <Text style={styles.dealText}>Zomato deal text</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.deals}>
                        <ImageBackground source={{uri:"https://i2.wp.com/www.lootpur.in/wp-content/uploads/2019/04/images-78-323493120..jpg?resize=300%2C190&ssl=1"}}  style={styles.dealImages}>
                            <Text style={styles.dealText}>Zomato deal text</Text>
                        </ImageBackground>
                    </View>
                </ScrollView>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                        <MaterialIcons name={'search'} color={'gray'} size={responsiveFontSize(3)}/>
                        <TextInput placeholder={'Search for restaurants,dishes...'}  placeholderTextColor={'#333'} style={styles.searchInput}/>
                    </View>
                    <TouchableOpacity style={styles.filter}>
                        <Ionicons name={'md-options'} color={'black'}
                                  size={responsiveFontSize(4.5)}/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={false}>
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
                </ScrollView>
            </View>
        );
    }
}

// FoodGoldContent.navigationOptions = {
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
    dealsContainer:{
        paddingBottom:responsiveHeight(2),
        backgroundColor:'#eee',
    }

});
