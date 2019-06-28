import React , {Component} from 'react';

import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import Colors from "../constants/Colors";
import Dash from 'react-native-dash';

export default class Header extends Component{
    render(){
        console.log('Inside Header');
        return(
            <View>
                <View style={styles.header}>
                    <View>
                      <View style={styles.locationLabel}>
                            <MaterialCommunityIcons name={'bookmark-minus-outline'} size={responsiveFontSize(1.7)} color={Colors.accentColor}/>
                        <Text style={styles.label}>YOUR LOCATION</Text>
                      </View>
                    <TextInput value={'Sidhi Vinayak Nagar, Ulhasnagar'} style={styles.tp}/>
                        <Dash style={{width:300, height:1, flexDirection:'row'}}/>
                    </View>
                    <View style={styles.locationIcon}>
                        <MaterialCommunityIcons name={'bookmark-minus-outline'} size={responsiveFontSize(4)} color={Colors.iconPageColor}/>
                    </View>
                </View>
                {/*<View style={styles.dinein}>*/}
                {/*    <View style={styles.del} >*/}
                {/*        <Text style={styles.dineLabel} >Delivery</Text>*/}
                {/*        <Image source={require('../assets/scooter.png')} style={styles.images}/>*/}
                {/*    </View>*/}
                {/*    <View style={styles.pick}>*/}
                {/*        <Text style={styles.dineLabel}>Self Pickup</Text>*/}
                {/*        <Image source={require('../assets/paperbag.jpg')} style={styles.images}/>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header:{
        display:'flex',
        backgroundColor: '#eee',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(2.5),
        paddingBottom:responsiveHeight(1),
        borderBottomWidth: 1,
        borderBottomColor:Colors.iconColor,
        paddingTop:responsiveHeight(4),
    },
    locationLabel:{
      flexDirection:'row',
    },
    label:{
        paddingBottom:responsiveHeight(0.1),
        fontSize: responsiveFontSize(1.2),
        color:'grey'
    },
    body:{
        flex:1,
    },
    tp:{
      fontSize:responsiveFontSize(2.3),
        fontWeight:'400',
    },

    dinein:{
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        height:50,
        width:'100%',
        alignItems: 'center',
        paddingHorizontal: 20,


    },
    locationIcon:{
        justifyContent:'center',

    },
    del:{
        flexDirection:'row',
        width:'30%',
    },
    pick:{
        width:'37%',flexDirection:'row',

    },
    dineLabel:{
        fontSize:15,
        fontWeight: 'bold',
        width:'60%',
    },
    images:{
        width:32,
        height:32
    },
    bookmarkImg:{
        width:32,
        height:32
    },
    userContainer:{
        flexDirection:"row",
        alignItems: "center",
        paddingHorizontal:15,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    name:{
        fontSize:20,
        fontWeight: '600'
    },
    email:{
        fontSize:16,
        color:'#999'
    },
    userInfoContainer:{
        paddingHorizontal: 15,
        alignSelf:'stretch',
        justifyContent: 'space-around'
    },
    footer:{
        backgroundColor:'#fff',
        width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderTopWidth:1,
        borderTopColor:'lightgray',
    },
    footerView:{
        paddingLeft:30,
        width:'30%',
    },
    footerText:{
        fontSize:11,
        fontWeight:'600',
        color:'lightgray'

    },
    footerText1:{
        fontSize:11,
        fontWeight:'500',
        color:'red'

    },
    timing:{
        color:'red',
        fontSize:16,
    },
    cost:{
        color:'blue',
        fontSize:16,
    },
    setUp:{
        flexDirection:'row',

    },

});
Dash.defaultProps = {
    dashGap: 2,
    dashLength: 2,
    dashThickness: 1,
    dashColor: Colors.shadeColor,
};
