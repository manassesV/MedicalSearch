import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import the different screens
import Loading from './src/components/loading'
import SignUp from './src/pages/signup'
import Login from './src/pages/login'
import Main from './src/pages/main'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FFD700',
    },
    headerTintColor: '#000',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);