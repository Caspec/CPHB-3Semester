import React from 'react';
import { Platform , Image} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FavoritesScreen from './screens/Favorites';
import RegisterPlaceScreen from './screens/RegisterPlace';
import AllPlacesScreen from './screens/AllPlaces';
import SearchScreen from './screens/Search';

import { HamburgerIcon, SettingsIcon, BackIcon } from './components/icons';

import { CustomDrawerContent } from './components';
import { colors } from './utils/constants';

/*const AppMainTab = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Sweet home',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.P_DARK,
      },
      headerTitle: 'Sweet Home',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Favorites',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.P_DARK,
      },
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.P_DARK,
      },
      headerTitle: 'Profile',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PRIMARY_COL,
    inactiveBackgroundColor: colors.P_DARK,
    activeBackgroundColor: colors.P_DARK,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: colors.PINK_300,
    },
    style: {
      backgroundColor: colors.P_DARK,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});*/

const AppMainStack = StackNavigator({
  Home: { screen: ProfileScreen ,
   navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerTitle: (
          <Image style={{height:'100%', resizeMode:'contain'}} source={require('../assets/Images/logo.png')}/>
      ),
      headerStyle: {
        backgroundColor: colors.P_DARK,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('RegisterPlace')} />,
    })
  },
  RegisterPlace: { screen: RegisterPlaceScreen ,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.P_DARK,
      },
      headerTitle: 'Register',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PRIMARY_COL,
  }
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  AllPlaces:{
    screen: AllPlacesScreen,
  },
  Search:{
    screen: SearchScreen
  }
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
    />),
  contentOptions: {
    activeBackgroundColor:colors.P_LIGHT,
    labelStyle:{color:colors.WHITE}
  },
  drawerBackgroundColor : colors.P_DARK
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
