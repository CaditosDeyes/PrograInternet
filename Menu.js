import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <View>
        <Text style={{color:"black"}}>Bienvenido {this.props.route.params.nombre}</Text>
      </View>
    )
  }
}