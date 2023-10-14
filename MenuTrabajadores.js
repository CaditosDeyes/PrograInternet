import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MostrarDetalles from './MostrarDetalles';
import TAB2 from './Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenuTrabajadores extends Component {
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
        <Tab.Screen name="Lista de constructores" component={MostrarDetalles} initialParams={{nombre:this.props.route.params.nombre}}
        options={{
          tabBarLabel: 'Constructor',
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