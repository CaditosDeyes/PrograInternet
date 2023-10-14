import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class MostrarDetalles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nombre: this.props.route.params.nombre,
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View style={styles.containerDrawer}>
        <Text style={styles.paragraph}>Bienvenido{this.state.nombre}</Text>
          <Button
            title="Cerrar drawer"
            onPress={this.toggleOpen}
          />
      </View>
    );
  };

  render() {
    const { route } = this.props;
    const { worker } = route.params;

    return (
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
            <Text style={styles.titulo}>Detalles del trabajador</Text>
          </View>
        </View>
        
        <View>
          <Image
            source={{ uri: worker.Imagen }}
            style={{ width: 150, height: 150, marginTop:20, marginLeft:100 }}
          />
          <Text style={styles.detallesTrabajador}>Nombre: {worker.Nombre}</Text>
          <Text style={styles.detallesTrabajador}>Profesión: {worker.Profesion}</Text>
          <Text style={styles.detallesTrabajador}>Teléfono: {worker.Telefono}</Text>
        </View>
        
      </MenuDrawer>
    );
  }
}

const styles = StyleSheet.create({
  containerDrawer: {
    backgroundColor: "lightblue",
    height: 700,
    width: 180,
  },
  container: {
    backgroundColor: "white",
  },
  contenedorDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "lightblue",
    height: 60,
    width: 430,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  imagenIconoMenu: {
    width: 40,
    height: 40,
    marginLeft: 3,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black",
    marginLeft: 50,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  detallesTrabajador: {
    alignItems: "center",
    //marginTop: 30,
    color: "black",
    marginLeft: 70,
    fontSize: 20,
  },
});
