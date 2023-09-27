import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Tab2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
  render() {
    return (
      <View>
        <Text>Tab2</Text>
      </View>
    )
  }
}