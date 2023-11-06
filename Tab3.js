import { Text, View, StyleSheet, PermissionsAndroid } from 'react-native'
import React, { Component } from 'react'
import MenuDrawer from 'react-native-side-drawer'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {PERMISSIONS} from 'react-native-permissions';
import MapViewDirections from 'react-native-maps-directions';
const llaveapi = "AIzaSyCueV-w_VdQxaxjrmRmZD_RFA7wX0CoM-o";

export default class Tab3 extends Component {
   /* toggleOpen = () => {
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
      };*/
  render() {
    async function requestGeolocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'La app requiere de tu localizacion',
            'message': 'Danos acceso a tu ubicacion'
          });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the geolocation")
        } else {
          console.log("Geolocation permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }
    requestGeolocationPermission();
    return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 20.655897,
            longitude: -103.32689,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <Marker
            coordinate={{latitude:20.655897, longitude:-103.32689}}
            title = 'Cucei'
            description='Centro Universitario De Ciencias Exactas E Ingenierias'
          />
            <MapViewDirections
              origin={{latitude:20.655897, longitude:-103.32689}}
              destination={{latitude:20.526096748721827, longitude:-103.30760354679165}}
              strokeWidth={5}
              strokeColor="red"
              apikey={llaveapi}
              onReady={result => {
                console.log("La distancia entre cucei y el aeropuerto es de:" + result.distance+"km")
                console.log("El tiempo de recorrido sera de: "+result.duration+ "min. aprox")
              }}
            ></MapViewDirections>
        </MapView>
      </View>
    );
  };
  
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });