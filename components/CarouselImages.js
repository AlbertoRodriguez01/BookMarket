import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

export default function CarouselImages({ images, width, height}) {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image
                    style={{ width: width, height: height}}
                    PlaceholderContent={<ActivityIndicator color="#fff"/>}
                    source={{uri: item}}
                />
            </View>
        )
    }

    return (
        <Carousel
            layout={'default'}
            data={images}
            sliderWidth={ancho}
            itemWidth={ancho}
            renderItem={renderItem}
        />
      )
}
    


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    img:{
        width:"100%",
        height: 50,
        resizeMode:"cover",
        borderRadius:24,
        margin:0,
        marginBottom:10
    }
})
