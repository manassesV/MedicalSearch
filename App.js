import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import the different screens
import Loading from './src/components/loading'
import SignUp from './src/pages/signup'
import Login from './src/pages/login'
import Main from './src/pages/main'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCuoQrt6twCVld2GHTSu0Wn3hKGX0qkBgg",
  authDomain: "notification-1b2fc.firebaseapp.com",
  databaseURL: "https://notification-1b2fc.firebaseio.com",
  projectId: "notification-1b2fc",
  storageBucket: "notification-1b2fc.appspot.com",
  messagingSenderId: "768391709712",
  appId: "1:768391709712:web:4c67a05145c15b73d73695"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
  Main: {
    screen: Main
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