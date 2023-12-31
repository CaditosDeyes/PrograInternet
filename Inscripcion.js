import { Alert, Modal, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { Component } from 'react'

export default class Inscripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //declaracion de variables
            modalVentanaCorreo:false,
            modalVentanaFacebook:false,
            nombre:"",
            correo:"",
            password:"",
        };
      }
  render() {
    const correo = () => {
        this.setState({modalVentanaCorreo:true});
    }
    const cierraModalCorreo = () => {
        this.setState({modalVentanaCorreo:false});
        //codigo para enviar y recibir datos del server
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
                if(xhttp.responseText === "1"){
                    Alert.alert("Registro insertado");
                }else{
                    Alert.alert("Error");
                }
            }
        };
        xhttp.open("GET", "https://ground-editor.000webhostapp.com/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }
    const facebook = () => {
        this.setState({modalVentanaFacebook:true});
    }
    const cierraModalFacebook = () => {
        this.setState({modalVentanaFacebook:false});
        //codigo para enviar y recibir datos del server
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
                if(xhttp.responseText === "1"){
                    Alert.alert("Registro insertado");
                }else{
                    Alert.alert("Error");
                }
            }
        };
        xhttp.open("GET", "https://ground-editor.000webhostapp.com/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }
    return (
      <View>
        <Text style={{
            fontSize:40,
            textAlign:"center",
        }}>Inscripción</Text>

            <TouchableOpacity style={{
                //borderWidth:2,
                width:250,
                height:50,
                backgroundColor:"blue",
                borderRadius:40,
                marginLeft:70,
                marginTop:30,
            }} onPress={correo}>
                <Text style={{
                    fontSize:20,
                    textAlign:"center",
                    marginTop:10,
                    color:"white",
                }}>Inscribirse por Correo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                //borderWidth:2,
                width:250,
                height:50,
                backgroundColor:"gray",
                borderRadius:40,
                marginLeft:70,
                marginTop:30,
            }} onPress={facebook}>
                <Text style={{
                    fontSize:20,
                    textAlign:"center",
                    marginTop:10,
                    color:"white",
                }}>Inscribirse por Facebook</Text>
            </TouchableOpacity>

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

                    }}>Nombre:</Text>
                    <TextInput onChangeText={nombre => this.setState({nombre})}>
                        
                    </TextInput>

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

                    }}>Nombre:</Text>
                    <TextInput onChangeText={nombre => this.setState({nombre})} >
                    </TextInput>

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
                    <TextInput onChangeText={password => this.setState({password})} >
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
    )
  }
}