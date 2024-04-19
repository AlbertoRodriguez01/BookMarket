import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Login(props) {

    //Creamos la variable estado
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesion', 'Accediendo...')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }

    const registro = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('Book Market', 'La cuenta ha sido creada correctamente')
            })
            .catch(error => {
                Alert.alert('Error', 'No se ha podido crear la cuenta')
            })
    }


    return (
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            </View>

            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo@gmail.com' style={{ paddingHorizontal: 15 }}
                        onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Password' style={{ paddingHorizontal: 15 }}
                        secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                </View>

                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.textoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={registro}>
                        <Text style={styles.textoBoton}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36ADFC'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white'
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cajaTexto: {
        paddingVertical: 20,
        backgroundColor: '#cccccc40',
        borderRadius: 30,
        marginVertical: 10
    },
    padreBoton: {
        alignItems: 'center',
    },
    cajaBoton: {
        backgroundColor: '#36ADFC',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white'
    }
});