import * as React from 'react';
import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Stylesheet, Component, TextInput, Modal} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import firebase from 'firebase';
import db from './Config';
import Welcome from './Welcome';
import Home from './Home';
import Feedback from './Feedback';
import Request from './Request';
import Donate from './Donate';
import AppHeader from './Header';

export default class App extends React.Component
{
  render()
  {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  Donate: {screen: Donate},
  Request: {screen: Request},
  Feedback: {screen: Feedback}
},

{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: () =>
    {    
      const routeName = navigation.state.routeName;
      console.log(routeName);

      if(routeName === "Home")
      {
        return(
          <Image
            source = {{uri: "https://i.pinimg.com/originals/46/cb/a9/46cba9f93a3d437db6d42f4bcd1a5f5f.gif"}}
          />
        )
      }
      else if(routeName === "Donate")
      {
        <Image
          source = {{uri: "https://media4.giphy.com/media/iFyQMfqxYFhO2b4o3T/source.gif"}}
        />
      }
      else if(routeName === "Request")
      {
        <Image
          source = {{uri: "https://kotharitech.com/wp-content/uploads/2019/08/QuarterlyThirdBlacklab-small.gif"}}
        />
      }
      else if(routeName === "Feedback")
      {
        <Image
          source = {{uri: "https://i.gifer.com/M12x.gif"}}
        />
      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  Welcome: {screen: Welcome},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);