import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import OrderScreen from '../screens/OrderScreen';
import GoOutScreen from '../screens/GoOutScreen';
import GoldScreen from '../screens/GoldScreen';

import Colors from '../constants/Colors';
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";

import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const OrderStack = createStackNavigator(
  {
    Order: OrderScreen,
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

const ProfileStack = createStackNavigator(
    {
        Profile: GoldScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ focused , tintColor}) => (
        <MaterialIcons name={'person'} size={responsiveFontSize(4)} color={Colors.iconColor} tintColor={{tintColor}}  focused={focused} />
    ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
      OrderStack,
      GoOutStack,
      GoldStack,
      SearchStack,
      ProfileStack
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
