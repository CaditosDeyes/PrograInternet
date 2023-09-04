import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//la importacion de lo que usemos

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render() {
    //las acciones de los objetos
    const clickEmail = () => {
      console.log("Le diste click al boton de Email");
    }
    const clickFacebook = () => {
      console.log("Le diste click al boton de Facebook");
    }
    return (
      <View style={styles.fondo}>
      <Image
        style={styles.imagen1}
        source={require("./img/constructor2.png")}
      />
      <View style={styles.login}>
        <Text style={styles.txthandyman}>Welcome to handyman</Text>
        <TouchableOpacity style={styles.boton1} onPress={clickEmail}>
          <View style={styles.btnemail}>
              <Text style={styles.txtemail}>Sign in with Email</Text>
              <Image
              style={styles.imagenCorreo}
              source={require("./img/correo2.png")}
              />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton2} onPress={clickFacebook}>
        <View style={styles.btnfacebook}>
            <Text style={styles.txtfacebook}>Sign in with Facebook</Text>
            <Image
            style={styles.imagenFacebook}
            source={require("./img/facebook.png")}
            />
        </View>
        </TouchableOpacity>
        <Text style={styles.txtSignUp}>Dont have an account? SIGN UP</Text>

      </View>
      </View>
    );
  }
}
//seccion de estilos
const styles = StyleSheet.create({
  boton2:{
    //borderWidth:2,
    width:200,
    height:40,
    marginTop:10,
  },
    boton1:{
      //borderWidth:2,
      width:200,
      height:40,
      marginTop:10,
    },
    imagenFacebook:{
      width:20,
      height:20,
      marginLeft:6,
      marginTop:-20,
    },
    imagenCorreo:{
      width:30,
      height:20,
      marginLeft:6,
      marginTop:-20,
    },
    txtSignUp:{
      marginTop:10,
      textAlign:"center",
      color:'white'
    },
    txtfacebook:{
        marginTop:10,
        textAlign:"center",
        color:'black',
    },
    txtemail:{
        marginTop:10,
        textAlign:"center",
        color:'white',
    },
    btnfacebook:{
        width:200,
        height:40,
        borderWidth:2,
        borderColor:"#FFFFFF",
        backgroundColor:"#FFFFFF",
        borderRadius:40,
        //marginLeft:80,
        //marginTop:10,
    },
    btnemail:{
        width:200,
        height:40,
        borderWidth:2,
        borderColor:"#0000FF",
        backgroundColor:"#0000FF",
        borderRadius:40,
        //marginLeft:80,
        //marginTop:10,
    },
    txthandyman:{
        fontSize:20,
        textAlign:"center",
        marginTop:20,
        color:'white',
    },
    fondo:{
        backgroundColor:'white',
    },
    login:{
        width:380,
        height:200,
        borderWidth:2,
        borderColor:"#E58835",
        backgroundColor:"#E58835",
        borderRadius:30,
        marginLeft:7,
        alignItems:"center",
    },
imagen1:{
    width:400,
    height:400,
    marginTop:50,
},

});
