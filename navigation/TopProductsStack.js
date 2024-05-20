import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopProducts from '../screens/TopProducts'


const Stack = createStackNavigator()

export default function TopProductsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Top"
                component={TopProducts}
                options={{ title: "Top 10" }}
            />
        </Stack.Navigator>
    )
}