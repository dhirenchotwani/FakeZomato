import React from 'react';
import {Text, View} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Header from "../components/Header";
import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import DeliveryScreen from "./Delivery";
import {MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import Colors from "../constants/Colors";
import SelfPickup from "./SelfPickup";

const ProfileTopBar = createMaterialTopTabNavigator(
    {
      Delivery: {
        screen: DeliveryScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name={'motorbike'} size={responsiveFontSize(3)} color={Colors.iconPageColor}/>
          )
        },
      },
      SelfPickup:{
        screen:SelfPickup,
        navigationOptions:{
          tabBarIcon: ({ tintColor }) => (
              <SimpleLineIcons name={'handbag'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
          )
        },
      },


    },{

      tabBarOptions: {
        style: {
          // marginBottom: responsiveHeight(76),
          backgroundColor: 'white',

        },

        labelStyle:{
          color:'black',
          fontSize:responsiveFontSize(1.5),
        },
        tabStyle:{
          width:responsiveWidth(30),
          height:responsiveHeight(6),
          flexDirection:'row',
        },
        indicatorStyle:{
          backgroundColor:Colors.accentColor,
          height:6,

        },
        showIcon:true,

      },

      animationEnabled:false,
      swipeEnabled:false,
      lazy:true,


    },
);

ProfileTopBar.navigationOptions = {
  tabBarLabel: 'ORDER',
  tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name={'food-fork-drink'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
  ),
};

export default class ProfileScreen extends React.Component {

  render() {
    return (
        <View>
        <Text>Hi</Text>

        </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'Lol ',
};
