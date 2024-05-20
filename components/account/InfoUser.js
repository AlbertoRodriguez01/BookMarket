import React, { useState } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { Avatar } from 'react-native-elements'
import { loadImageFromGallery } from '../../utils/helpers'
import { getUserId, uploadImage } from '../../utils/actions'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function InfoUser({ user, setLoading, setLoadingText }) {

    const [photoUrl, setPhotoUrl] = useState(user.photoURL)

    const changePhoto = async() => {

        // const result = await loadImageFromGallery([1, 1])
        // if (!result.status){
        //     return
        // }

        // setLoadingText("Actualizando imagen...");
        // setLoading(true);
        // const storageRef = ref(storage, `Avatars/${getUserId()}`);
        // try {
        //     await uploadBytes(storageRef, {photoURL: result.image});
        //     const url = await getDownloadURL(storageRef);
        //     console.log("Uploaded image URL:", url);

        //     setLoading(false);
        //     setPhotoUrl(url);
        // } catch (error) {
        //     console.error("Error uploading image:", error);
        //     setLoading(false);
        //     Alert.alert("Ha ocurrido un error subiendo la foto de perfil");
        // }
    }

    return (
        <View style={styles.container}>
         <Avatar 
            rounded
            size="large"
            onPress={changePhoto}
            source={
                photoUrl
                ? {uri: photoUrl}
                : require('../../assets/avatar-default.jpg')
            }
         />
         <View style={styles.infoUser}>
            <Text style={styles.displayName}>
                {
                    user.displayName ? user.displayName : "Anonimo"
                }
            </Text>
            <Text>{user.email}</Text>
         </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor:"#f9f9f9",
        paddingVertical:30
    },
    infoUser:{
        marginLeft:20
    },
    displayName:{
        fontWeight:"bold",
        paddingBottom:5
    }
})