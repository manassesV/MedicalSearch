import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import Login from './src/pages/login';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  }
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

export default createAppContainer(AppNavigator)