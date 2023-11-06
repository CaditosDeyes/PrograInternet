import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from './Tab1';
import TAB2 from './Tab2';
import TAB3 from './Tab3';
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
        <Tab.Screen name="Videos" component={TAB2} 
        options={{
          tabBarLabel: 'Información',
          tabBarIcon: () => (
            <Icon name="newspaper-outline" color={"red"} size={40} />
          ),}}
          />
          <Tab.Screen name="Mapa" component={TAB3} 
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: () => (
            <Icon name="map-outline" color={"red"} size={40} />
          ),}}
          />
    </Tab.Navigator>
    );
  }
}