import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Registro(props){

        const initialState = {
            correo:'',
            pwd:''
        }

        const [state, setState] = useState(initialState)

        const handleChangeText = (value, name)=>{
            setState({...state, [name]:value})
        }

        const registrar = ()=>{
            Alert.alert('Book Market', 'Registrandose')
        }

        return (
            <View style={styles.padre}>
            <View>
                <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
            </View>

            <View style={styles.tarjeta}>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo@gmail.com' style={{paddingHorizontal:15}}
                            onChangeText={(value)=>handleChangeText(value, 'correo')} value={state.correo}/>
                </View>

                <View style={styles.cajaTexto}>
                        <TextInput placeholder='Password' style={{paddingHorizontal:15}} 
                        secureTextEntry={true} onChangeText={(value)=>handleChangeText(value, 'password')} value={state.password}/>
                </View>
                <View style={styles.cajaTexto}>
                        <TextInput placeholder='Confirm Password' style={{paddingHorizontal:15}} 
                        secureTextEntry={true} onChangeText={(value)=>handleChangeText(value, 'confirmpassword')} value={state.confirmpassword}/>
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton}>
                        <Text style={styles.textoBoton} onPress={registrar}> Registrarse </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#36ADFC'
    },
    logo:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor: 'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    padreBoton:{
        alignItems:'center',
    },
    cajaBoton:{
        backgroundColor:'#36ADFC',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    textoBoton:{
        textAlign:'center',
        color:'white'
    }
});