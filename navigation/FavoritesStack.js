import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator()

export default function FavoritesStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen
            name="Favoritos"
            component={Favorites}
            options={{title: "Carrito"}}
        />
    </Stack.Navigator>
  )
}
