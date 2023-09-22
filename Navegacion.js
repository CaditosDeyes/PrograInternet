import React, {Component} from 'react';
import { View, Text, NativeEventEmitter } from 'react-native'
import INICIO from './Inicio';
import INSCRIPCION from './Inscripcion';
import MENU from './Menu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //declaracion de variables
        };
    }

    render(){
        const Stack = createNativeStackNavigator();
        return(
            <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen name="Inicio" component={INICIO} options={{headerShown:false}}></Stack.Screen>
                    <Stack.Screen name="Inscripcion" component={INSCRIPCION}></Stack.Screen>
                    <Stack.Screen name="Menu" component={MENU}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}