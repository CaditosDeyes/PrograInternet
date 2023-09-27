import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
//la importacion de lo que usemos

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
        modalVentanaCorreo:false,
        modalVentanaFacebook:false,
    };
  }

  render() {
    //las acciones de los objetos
    const clickEmail = () => {
      //console.log("Le diste click al boton de Email");
      this.setState({modalVentanaCorreo:true});
    }
    const cierraModalCorreo = () => {
      _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText)
            if(xhttp.responseText === "3"){
              Alert.alert("Correo desconocido, Registrate");
            }else{
              if(xhttp.responseText === "0"){
                Alert.alert("Password malo, intenta de nuevo");
              }else{
                _this.props.navigation.navigate("Menu",{nombre:xhttp.responseText});
                _this.setState({modalVentanaCorreo:false});
              }
            }
          }
};
xhttp.open("GET", "https://ground-editor.000webhostapp.com/datos.php?&correo="+this.state.correo+"&password="+this.state.password, true);
xhttp.send();
    }
    const clickFacebook = () => {
      //console.log("Le diste click al boton de Facebook");
      this.setState({modalVentanaFacebook:true});
    }
    const cierraModalFacebook = () => {
      _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText)
            if(xhttp.responseText === "3"){
              Alert.alert("Correo desconocido, Registrate");
            }else{
              if(xhttp.responseText === "0"){
                Alert.alert("Password malo, intenta de nuevo");
              }else{
                _this.props.navigation.navigate("Menu",{nombre:xhttp.responseText});
                _this.setState({modalVentanaFacebook:false});
              }
            }
          }
};
xhttp.open("GET", "https://ground-editor.000webhostapp.com/datos.php?&correo="+this.state.correo+"&password="+this.state.password, true);
xhttp.send();
    }

    const ir_a_inscripcion = () => {
      this.props.navigation.navigate('Inscripcion')
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
        <TouchableOpacity onPress={ir_a_inscripcion}>
        <Text style={styles.txtSignUp}>Dont have an account? SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Modal
            transparent={true}
            visible={this.state.modalVentanaCorreo}
            animationType="slide"
            >
                <View style={{
                    borderWidth:2,
                    width:300,
                    height:300,
                    marginLeft:55,
                    marginTop:300,
                    backgroundColor:"blue",
                    borderRadius:40,
                }}>
                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Correo:</Text>
                    <TextInput>
                    </TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Password:</Text>
                    <TextInput>
                    </TextInput>
                    <TouchableOpacity style={{
                            borderWidth:2,
                            width:200,
                            height:50,
                            marginLeft:60,
                            borderRadius:40,
                        }} onPress={cierraModalCorreo}>
                        <Text style={{
                            fontSize:20,
                            textAlign:"center",
                            marginTop:10,
                            color:"white",
                        }}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
            transparent={true}
            visible={this.state.modalVentanaFacebook}
            animationType="slide"
            >
                <View style={{
                    borderWidth:2,
                    width:300,
                    height:300,
                    marginLeft:55,
                    marginTop:300,
                    backgroundColor:"gray",
                    borderRadius:40,
                }}>
                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Correo:</Text>
                    <TextInput onChangeText={correo => this.setState({correo})}>
                    </TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Password:</Text>
                    <TextInput onChangeText={password => this.setState({password})}>
                    </TextInput>
                    <TouchableOpacity style={{
                            borderWidth:2,
                            width:200,
                            height:50,
                            marginLeft:60,
                            borderRadius:40,
                        }} onPress={cierraModalFacebook}>
                        <Text style={{
                            fontSize:20,
                            textAlign:"center",
                            marginTop:10,
                            color:"white",
                        }}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
