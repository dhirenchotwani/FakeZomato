import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator , createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';


import OrderScreen from '../screens/OrderScreen';
import GoOutScreen from '../screens/GoOutScreen';
import GoldScreen from '../screens/GoldScreen';
import DeliveryScreen from '../screens/Delivery';
import SelfPickup from '../screens/SelfPickup';


import Colors from '../constants/Colors';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

import {MaterialIcons, MaterialCommunityIcons , SimpleLineIcons} from "@expo/vector-icons";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const OrderStack = createMaterialTopTabNavigator(
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
        swipeEnabled:false


    },

    config
);

OrderStack.navigationOptions = {
  tabBarLabel: 'ORDER',
  tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name={'food-fork-drink'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
  ),
};

OrderStack.path = '';

const GoOutStack = createStackNavigator(
  {
    GoOut: GoOutScreen,
  },{

},
  config
);

GoOutStack.navigationOptions = {
  tabBarLabel: 'GO OUT',
  tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name={'home-modern'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
  ),
};

GoOutStack.path = '';

const GoldStack = createStackNavigator(
  {
    Gold: GoldScreen,
  },
  config
);

GoldStack.navigationOptions = {
  tabBarLabel: 'GOLD',
  tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name={'account-star'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
  ),
};

GoldStack.path = '';

const SearchStack = createStackNavigator(
    {
        Search: GoldScreen,
    },
    config
);

SearchStack.navigationOptions = {
    tabBarLabel: 'SEARCH',
    tabBarIcon: ({ focused }) => (
        <MaterialIcons name={'search'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
    ),
};

SearchStack.path = '';

const ProfileDrawer = createDrawerNavigator(
    {
        Profile: GoldScreen,
    },
    config
);

ProfileDrawer.navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ focused , tintColor}) => (
        <MaterialIcons name={'person'} size={responsiveFontSize(4)} color={Colors.iconColor} tintColor={{tintColor}}  focused={focused} />
    ),
};

ProfileDrawer.path = '';

const tabNavigator = createBottomTabNavigator({
      OrderStack,
      GoOutStack,
      GoldStack,
      SearchStack,
    ProfileDrawer
},{
    tabBarOptions:{
        style: {
            height:responsiveHeight(7),
        },
        activeTintColor:Colors.accentColor,



    }
});

tabNavigator.path = '';

export default tabNavigator;
