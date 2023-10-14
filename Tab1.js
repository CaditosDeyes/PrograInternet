import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, FlatList } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dataSource: [],
      showDetails: [], // Nuevo estado para controlar la visibilidad de los detalles
      nombre: this.props.route.params.nombre,
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

    // Función para alternar la visibilidad de los detalles
    toggleDetails(index) {
      const updatedShowDetails = [...this.state.showDetails];
      updatedShowDetails[index] = !updatedShowDetails[index];
      this.setState({ showDetails: updatedShowDetails });
      this.props.navigation.navigate('MostrarDetalles', {
        worker: this.state.dataSource[index],
      });
    }
//{this.Component.route.params.nombre}
  drawerContent = () => {
    return (
      <View style={styles.containerDrawer}>
        <Text style={styles.paragraph}>Bienvenido {this.state.nombre}</Text>
        <Button
          title="Cerrar drawer"
          onPress={this.toggleOpen}
        />
    </View>
    );
  };

  componentDidMount() {
    _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var Temporal = JSON.parse(xhttp.responseText);
        const showDetailsArray = new Array(Temporal.length).fill(false);
        _this.setState({ dataSource: Temporal, showDetails: showDetailsArray });
      }
    };
    xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
    xhttp.send();
  }

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
            </View>
          </View>
        </MenuDrawer>
        <View>
          <Text style={{ color: "blue", fontSize: 30, marginLeft: 70, marginTop:10}}>Trabajadores:</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item, index }) => (
              <View style={{ width: 500, height: 180, marginTop:10 }}>
                <Text style={{ color: "black", marginLeft: 50 }}>{item.Nombre}</Text>
                <Text style={{ color: "black", marginLeft: 50 }}>{item.Profesion}</Text>
                <Text style={{ color: "black", marginLeft: 50 }}>{item.Telefono}</Text>
                <Image
                  source={{ uri: item.Imagen }}
                  style={{ width: 100, height: 100, marginLeft: 50 }}
                  />
                <TouchableOpacity
                  onPress={() => this.toggleDetails(index)}
                  style={{ marginLeft: 50, marginTop: 10 }}
                >
                  <Text style={{ color: "blue", marginLeft:140, marginTop:-80}}>
                    Mostrar Detalles
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 300,
                    height: 6,
                    backgroundColor: "gray",
                    marginLeft: 50,
                    marginTop: 10,
                  }}
                ></View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
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
    width: 40,
    height: 40,
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