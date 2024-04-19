import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { list } from 'firebase/storage';
const db = getFirestore(appFirebase)

export default function MostrarComic(props) {

    const [comic, setComic] = useState({})

    const getOneComic = async (id) => {
        try {
            const docRef = doc(db, 'Comics', id)
            const docSnap = await getDoc(docRef)
            setComic(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOneComic(props.route.params.comicId)
    },[])

    const deleteComic = async (id) => {
        await deleteDoc(doc(db, 'Comics', id))
        Alert.alert('Alerta', 'Se ha eliminado')
        props.navigation.navigate('Home')
    }


    return (
        <View>
            <Text>Titulo: {comic.titulo} </Text>
            <Text>Descripcion: {comic.descripcion}</Text>
            <Text>Precio: {comic.precio}</Text>

            <TouchableOpacity style={styles.cajaBoton} onPress={()=>deleteComic(props.route.params.comicId)}>
                <Text style={styles.textoBoton}>Eliminar comic</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'Top',
        alignItems: 'Center',
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