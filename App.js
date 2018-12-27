import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, StyleSheet, Platform  } from "react-native";
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import HomeTab from './components/tabNavigator/HomeTab';
import JobsTab from './components/tabNavigator/JobsTab';
import ProfileTab from './components/tabNavigator/ProfileTab';
import OptionsTab from './components/tabNavigator/OptionsTab';

import { Icon }  from 'native-base';

class App extends React.Component {
  render(){
    return (
        <AppContainer />
    )
  }
}

const AppAuthenStackNavigator = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
},{ 
  headerMode: 'none'
});

const AppHomeStackNavigator = createStackNavigator({
  HomeTab: { screen: HomeTab }, 
});

const AppJobsStackNavigator = createStackNavigator({
  JobsTab: { screen: JobsTab }, 
});

const AppProfileStackNavigator = createStackNavigator({
  ProfileTab: { screen: ProfileTab }, 
});

const AppOptionsStackNavigator = createStackNavigator({
  OptionsTab: { screen : OptionsTab },
});

const AppTabNavigator = createBottomTabNavigator({
  Login: { screen:  AppAuthenStackNavigator, navigationOptions : { tabBarVisible: false } },
  HomeTab: { screen: AppHomeStackNavigator },
  JobsTab: { screen : AppJobsStackNavigator },
  ProfileTab: { screen : AppProfileStackNavigator }, 
  OptionsTab: { screen : AppOptionsStackNavigator },
  initialRouteName: 'Login',
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'HomeTab') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'JobsTab') {
        iconName = `ios-search${focused ? '' : '-outline'}`;
      } else if (routeName === 'ProfileTab') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      } else if (routeName === 'OptionsTab') {
        iconName = `ios-settings${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={25} color={tintColor} />;

    },
  }),
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
           backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});

const AppContainer = createAppContainer(AppTabNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
  }
});
