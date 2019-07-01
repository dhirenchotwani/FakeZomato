import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator , createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';


//Profile Screen
import ProfileScreen from '../screens/ProfileScreen';

//Search Screen
import SearchScreen from '../screens/SearchScreen';

// Order Screen
import DeliveryScreen from '../screens/Delivery';
import SelfPickup from '../screens/SelfPickup';

//Go Out Screen
import BookTableScreen from '../screens/goOutScreens/BookTableScreen';
import CollectionsScreen from '../screens/goOutScreens/CollectionsScreen';
import CuisinesScreen from '../screens/goOutScreens/CuisinesScreen';
import EventsScreen from '../screens/goOutScreens/EventsScreen';
import ForYouScreen from '../screens/goOutScreens/ForYouScreen';
import SneakpeakScreen from '../screens/goOutScreens/SneakpeakScreen';


import Colors from '../constants/Colors';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

import {MaterialIcons, MaterialCommunityIcons , SimpleLineIcons, Entypo} from "@expo/vector-icons";

//Gold Screen
import AllGoldScreen from '../screens/goldScreens/AllGoldScreen';
import DrinksGoldScreen from '../screens/goldScreens/DrinksGoldScreen';
import FoodGoldScreen from '../screens/goldScreens/FoodGoldScreen';

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
        swipeEnabled:false,
        lazy:true,


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

const GoOutParent = createMaterialTopTabNavigator(
    {
        ForYou: {
            screen: ForYouScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name={'star-border'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        Sneakpeak:{
            screen:SneakpeakScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name={'ondemand-video'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        Collections: {
            screen: CollectionsScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name={'collections-bookmark'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        Events: {
            screen: EventsScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name={'event'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        Cuisines: {
            screen: CuisinesScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <MaterialCommunityIcons name={'food-fork-drink'} size={responsiveFontSize(2)}
                                            color={Colors.iconPageColor}/>
                )
            },
        },
        BookTable: {
            screen: BookTableScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <MaterialCommunityIcons name={'table'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },



    },{
        lazy:true,
        tabBarOptions: {
            style: {
                // marginBottom: responsiveHeight(76),
                backgroundColor: 'white',


            },
            scrollEnabled:true,

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

GoOutParent.navigationOptions = {
    tabBarLabel: 'GO OUT',
    tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons name={'home-modern'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
    ),
};

GoOutParent.path = '';


const GoldParent = createMaterialTopTabNavigator(
    {
        AllGoldScreen: {
            screen: AllGoldScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons name={'food'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        FoodGoldScreen:{
            screen:FoodGoldScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons name={'food-variant'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },
        DrinksGoldScreen: {
            screen: DrinksGoldScreen,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name={'drink'} size={responsiveFontSize(2)} color={Colors.iconPageColor}/>
                )
            },
        },

    },{
        lazy:true,
        tabBarOptions: {
            style: {
                // marginBottom: responsiveHeight(76),
                backgroundColor: 'white',


            },
            scrollEnabled:true,

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

GoldParent.navigationOptions = {
    tabBarLabel: 'GOLD',
    tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons name={'account-star'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
    ),
};

GoldParent.path = '';


const SearchParent = createDrawerNavigator(
    {
        Search: SearchScreen,
    },
    config
);

SearchParent.navigationOptions = {
    tabBarLabel: 'SEARCH',
    tabBarIcon: ({ focused }) => (
        <MaterialIcons name={'search'} size={responsiveFontSize(4)} color={Colors.iconColor}/>
    ),
};

SearchParent.path = '';

const ProfileDrawer = createDrawerNavigator(
    {
        Profile: ProfileScreen,
    },
    config);

ProfileDrawer.navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ focused , tintColor}) => (
        <MaterialIcons name={'person'} size={responsiveFontSize(4)} color={Colors.iconColor} tintColor={{tintColor}}  focused={focused} />
    ),
};

ProfileDrawer.path = '';

const tabNavigator = createBottomTabNavigator({

    OrderStack,
    GoOutParent,
    GoldParent,
      SearchParent,
    ProfileDrawer,
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
