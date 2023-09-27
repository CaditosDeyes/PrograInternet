import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from './Tab1';
import TAB2 from './Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
      initialRouteName='Feed'
      screenOptions={{
        toBarActiveTintColor:'blue'
      }}
      >
      <Tab.Screen name = "Lista de constructores" component = {TAB1}
      options={{
        tabBarLabel: 'UConstructores',
        tabBarIcon: ({color, size}) => (
          <Icon name ="body-outline" color={"red"} size={40}/>
        ),
      }}
      />
      <Tab.Screen name = "Tab2" component = {TAB2}
      options={{
        tabBarLabel: 'Informacion',
        tabBarIcon: ({color,size}) => (
          <Icon name = "newspaper-outline" color = {"red"} size = {35}/>
        ),
      }}
      />
      </Tab.Navigator>
    )
  }
}