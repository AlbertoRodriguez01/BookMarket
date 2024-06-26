import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)


export default function Home(props) {

    const libros = async () => {
        props.navigation.navigate('Libros')
    }

    const comics = async () => {
        props.navigation.navigate('Comics')
    }

    return (
        <View style={styles.padre}>
            <View style={styles.padreBoton}>
                <TouchableOpacity style={styles.cajaBoton} onPress={libros}>
                    <Text style={styles.textoBoton}>Ir a libros</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.padreBoton}>
                <TouchableOpacity style={styles.cajaBoton} onPress={comics}>
                    <Text style={styles.textoBoton}>Ir a comics</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
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