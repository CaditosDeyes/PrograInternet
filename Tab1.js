import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
//{this.Component.route.params.nombre}
  drawerContent = () => {
    return (
      <View style={styles.containerDrawer}>
        <Text style={styles.paragraph}>Bienvenido</Text>
        <Button
          title="Cerrar drawer"
          onPress={this.toggleOpen}
        />
    </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <View style={styles.container}>
          <View style={styles.contenedorDrawer}>
            <TouchableOpacity onPress={this.toggleOpen}>
            <Image
                style={styles.imagenIconoMenu}
                source={require("./img/menu.png")}
              />
            </TouchableOpacity>
            
              <Text style={styles.titulo}>Menu</Text>
          </View>
        </View>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDrawer:{
    backgroundColor: "lightblue",
    height: 700,
    width: 180,
  },
  container: {
    backgroundColor: "white",
  },
  contenedorDrawer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "lightblue",
    height: 60,
    width: 430,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  imagenIconoMenu:{
    width: 55,
    height: 55,
    marginLeft: 3,
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: "black",
    marginLeft: 100,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});