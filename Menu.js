import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from './Tab1';
import TAB2 from './Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator 
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen name="Lista de constructores" component={TAB1} initialParams={{nombre:this.props.route.params.nombre}}
        options={{
          tabBarLabel: 'Constructores',
          tabBarIcon: () => (
            <Icon name="body-outline" color={"red"} size={40} />
          ),}}
        />
        <Tab.Screen name="Tab2" component={TAB2} 
        options={{
          tabBarLabel: 'Información',
          tabBarIcon: () => (
            <Icon name="newspaper-outline" color={"red"} size={40} />
          ),}}
          />
    </Tab.Navigator>
    );
  }
}