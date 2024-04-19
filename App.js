import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/Login';
import Home from './screens/Home';
import Libros from './screens/Libros';
import Comics from './screens/Comics';
import Mostrar from './screens/Mostrar';


export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{
            title: "LOGIN",
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#36ADFC" },
          }} />
        <Stack.Screen name="Home" component={Home}
          options={{
            title: "HOME",
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#36ADFC" },
          }} />
        <Stack.Screen name="Libros" component={Libros}
          options={{
            title: "Libros",
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#36ADFC" },
          }} />
        <Stack.Screen name="Comics" component={Comics}
          options={{
            title: "Comics",
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#36ADFC" },
          }} />
          <Stack.Screen name="Mostrar" component={Mostrar}
          options={{
            title: "Mostrar",
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#36ADFC" },
          }} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
