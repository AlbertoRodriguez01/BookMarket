import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { list } from 'firebase/storage';
const db = getFirestore(appFirebase)


export default function Libros(props) {


    const [lista, setLista] = useState([])

    useEffect(() => {
        const getLista = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Libros'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    const { titulo, descripcion, precio } = doc.data()
                    docs.push({
                        id: doc.id,
                        titulo,
                        descripcion,
                        precio,
                    })
                })
                setLista(docs);
            } catch (error) {
                console.log(error)
            }
        }
        getLista()
    }, [lista])

    const initialState = {
        titulo: '',
        descripcion: '',
        precio: ''
    }

    const [state, setState] = useState(initialState)

    const HandleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }


    const saveLibro = async () => {
        try {
            await addDoc(collection(db, 'Libros'), {
                ...state
            })
            Alert.alert('Alerta', 'Guardado con exito')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.padre}>
            <View style={styles.tarjeta}>
                <TextInput placeholder='Titulo del libro' style={{ paddingHorizontal: 15 }} onChangeText={(value) => HandleChangeText(value, 'titulo')}
                    value={state.titulo} />
                <TextInput placeholder='Descripcion' style={{ paddingHorizontal: 15 }} onChangeText={(value) => HandleChangeText(value, 'descripcion')}
                    value={state.descripcion} />
                <TextInput placeholder='Precio' style={{ paddingHorizontal: 15 }} onChangeText={(value) => HandleChangeText(value, 'precio')}
                    value={state.precio} />
                <View style={styles.padreBoton}>
                    <TouchableOpacity style={styles.cajaBoton}>
                        <Text style={styles.textoBoton} onPress={saveLibro}>Agregar libro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tarjeta}>
                {
                    lista.map((list) => (
                        <TouchableOpacity key={list.id} style={styles.cajaBoton} onPress={()=>props.navigation.navigate('Mostrar', {libroId:list.id})}>
                            <Text style={styles.textoBoton}>{list.titulo}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
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