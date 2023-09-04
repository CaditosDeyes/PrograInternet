import { Modal, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { Component } from 'react'

export default class Inscripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //declaracion de variables
            modalVentanaCorreo:false,
            modalVentanaFacebook:false,
        };
      }
  render() {
    const correo = () => {
        this.setState({modalVentanaCorreo:true});
    }
    const cierraModalCorreo = () => {
        this.setState({modalVentanaCorreo:false});
    }
    const facebook = () => {
        this.setState({modalVentanaFacebook:true});
    }
    const cierraModalFacebook = () => {
        this.setState({modalVentanaFacebook:false});
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
                    <TextInput></TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Correo:</Text>
                    <TextInput></TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Password:</Text>
                    <TextInput></TextInput>
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
                    <TextInput></TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Correo:</Text>
                    <TextInput></TextInput>

                    <Text style={{
                        fontSize:20,
                        marginLeft:20,
                        color:"white",

                    }}>Password:</Text>
                    <TextInput></TextInput>
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