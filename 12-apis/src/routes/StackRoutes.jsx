
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Homescreens from '../screens/Homescreens'
import UsuarioScreen from '../screens/UsuarioScreen'

const Stack = createStackNavigator()

export default function StackRoutes() { 
  return (
   <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={Homescreens} />

        <Stack.Screen name="UsuarioScreen" component={UsuarioScreen} />

   </Stack.Navigator>
  )
}