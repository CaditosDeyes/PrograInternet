import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import MenuDrawer from 'react-native-side-drawer';


export default class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      //nombre: this.props.route.params.nombre,
      videoData: [
        { id: '1', videoId: 'AtAVKDDfAeg' },
        { id: '2', videoId: 'lslh3YNDIiE' },
        { id: '3', videoId: 'GoDODwVmjo8' },
        { id: '4', videoId: 'Gd61igGI4IE' },
        // Puedes seguir agregando más videos
      ],
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

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
  
  renderVideoItem = ({ item }) => {
    const videoUrl = `https://www.youtube.com/embed/${item.videoId}`;
    
    return (
      <View style={{ height: 300, width: 420, marginRight: 3, backgroundColor:"gray", }}>
        <Text style={styles.textoVideos}>Video # {item.id}</Text>
        <WebView
          source={{ uri: videoUrl }}
          javaScriptEnabled={true}
          style={{ flex: 1 }}
          />
      </View>
    );
  };
  
  render() {
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
          </View>
          <View>
            <FlatList
              data={this.state.videoData}
              renderItem={this.renderVideoItem}
              keyExtractor={(item) => item.id}
              horizontal
              />
          </View>
        </View>
      </MenuDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDrawer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  paragraph: {
    fontSize: 18,
    alignItems: 'center'
  },
  imagenIconoMenu: {
    width: 30,
    height: 30,
  },
  contenedorDrawer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue', // Puedes cambiar el color de fondo
  },
  textoVideos:{
    fontSize: 18,
    color: "black",
  },
});