
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Homescreens from '../screens/Homescreens'
import UsuarioScreen from '../screens/UsuarioScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="HomeScreen"
        component={Homescreens}
        options={{
          title: "Lista de Usuarios",
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="UsuarioScreen"
        component={UsuarioScreen}
        options={{
          title: "Usuarios",
          headerTitleAlign: 'center',
        }}
      />

    </Stack.Navigator>
  )
}